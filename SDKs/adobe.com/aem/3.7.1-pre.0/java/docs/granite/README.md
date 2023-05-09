# granite

### Available Operations

* [sslSetup](#sslsetup)

## sslSetup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SslSetupRequest;
import org.openapis.openapi.models.operations.SslSetupRequestBody;
import org.openapis.openapi.models.operations.SslSetupRequestBodyCertificateFile;
import org.openapis.openapi.models.operations.SslSetupRequestBodyPrivatekeyFile;
import org.openapis.openapi.models.operations.SslSetupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SslSetupRequest req = new SslSetupRequest("consequuntur", "repellat", "mollitia", "occaecati", "numquam", "commodi") {{
                requestBody = new SslSetupRequestBody() {{
                    certificateFile = new SslSetupRequestBodyCertificateFile("quam", "molestiae".getBytes());;
                    privatekeyFile = new SslSetupRequestBodyPrivatekeyFile("velit".getBytes(), "error");;
                }};;
            }};            

            SslSetupResponse res = sdk.granite.sslSetup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
