# charityOrg

### Available Operations

* [getCharityOrg](#getcharityorg) - This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
* [getCharityOrgs](#getcharityorgs) - This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

## getCharityOrg

This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCharityOrgRequest;
import org.openapis.openapi.models.operations.GetCharityOrgResponse;
import org.openapis.openapi.models.operations.GetCharityOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharityOrgRequest req = new GetCharityOrgRequest("quibusdam", "unde");            

            GetCharityOrgResponse res = sdk.charityOrg.getCharityOrg(req, new GetCharityOrgSecurity("nulla") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.charityOrg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCharityOrgs

This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCharityOrgsRequest;
import org.openapis.openapi.models.operations.GetCharityOrgsResponse;
import org.openapis.openapi.models.operations.GetCharityOrgsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharityOrgsRequest req = new GetCharityOrgsRequest("corrupti") {{
                limit = "illum";
                offset = "vel";
                q = "error";
                registrationIds = "deserunt";
            }};            

            GetCharityOrgsResponse res = sdk.charityOrg.getCharityOrgs(req, new GetCharityOrgsSecurity("suscipit") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.charitySearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
