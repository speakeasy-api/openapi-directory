# companyInfo

### Available Operations

* [companyInfoOne](#companyinfoone) - Get company info

## companyInfoOne

Get company info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyInfoOneRequest;
import org.openapis.openapi.models.operations.CompanyInfoOneResponse;
import org.openapis.openapi.models.operations.CompanyInfoOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyInfoOneRequest req = new CompanyInfoOneRequest("molestiae", "modi") {{
                fields = "qui";
                raw = false;
                xApideckServiceId = "impedit";
            }};            

            CompanyInfoOneResponse res = sdk.companyInfo.companyInfoOne(req, new CompanyInfoOneSecurity("cum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCompanyInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
