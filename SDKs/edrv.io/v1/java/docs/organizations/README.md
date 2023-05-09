# organizations

### Available Operations

* [getOrganization](#getorganization) - Get one organization's data by id
* [getOrganizations](#getorganizations) - Get an array of all Organizations
* [patchOrganization](#patchorganization) - Update an organization's data

## getOrganization

Get one organization's data by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationRequest;
import org.openapis.openapi.models.operations.GetOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetOrganizationRequest req = new GetOrganizationRequest("nemo") {{
                includeLocations = false;
            }};            

            GetOrganizationResponse res = sdk.organizations.getOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizations

Get an array of all Organizations

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationsRequest;
import org.openapis.openapi.models.operations.GetOrganizationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetOrganizationsRequest req = new GetOrganizationsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2022-02-22T15:09:45.631Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-12-27T17:23:03.738Z");
                includeLocations = false;
                paginateEnabled = false;
                paginateLimit = 764912L;
                paginatePage = "corporis";
                sortBy = "hic";
                sortOrder = SortOrder1Enum.ASC;
                updatedAtDollarGte = OffsetDateTime.parse("2022-08-28T17:02:52.151Z");
                updatedAtDollarLte = OffsetDateTime.parse("2022-06-24T19:43:09.208Z");
            }};            

            GetOrganizationsResponse res = sdk.organizations.getOrganizations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchOrganization

Update an organization's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchOrganizationRequest;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBody;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodyAddress;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodyChannels;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodyConfigurations;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodyLinks;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodySupport;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodySupportChat1;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodySupportChat;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodyTheme;
import org.openapis.openapi.models.operations.PatchOrganizationRequestBodyThemeColors;
import org.openapis.openapi.models.operations.PatchOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchOrganizationRequest req = new PatchOrganizationRequest(                new PatchOrganizationRequestBody() {{
                                active = false;
                                address = new PatchOrganizationRequestBodyAddress() {{
                                    city = "West Codyberg";
                                    country = "Andorra";
                                    postalCode = "74283";
                                    streetAndNumber = "hic";
                                }};;
                                channels = new PatchOrganizationRequestBodyChannels() {{
                                    slack = new java.util.HashMap<String, Object>() {{
                                        put("omnis", "facilis");
                                        put("perspiciatis", "voluptatem");
                                        put("porro", "consequuntur");
                                        put("blanditiis", "error");
                                    }};
                                    telegram = new java.util.HashMap<String, Object>() {{
                                        put("occaecati", "rerum");
                                    }};
                                }};;
                                configurations = new PatchOrganizationRequestBodyConfigurations() {{
                                    basicAuthEnabled = false;
                                    basicAuthPassword = false;
                                }};;
                                links = new PatchOrganizationRequestBodyLinks() {{
                                    about = "adipisci";
                                    contact = "asperiores";
                                    privacy = "earum";
                                    support = "modi";
                                }};;
                                locations = new Object[]{{
                                    add("dolorum"),
                                    add("deleniti"),
                                    add("pariatur"),
                                }};
                                logo = "provident";
                                name = "Randolph Wintheiser";
                                otp = "aliquid";
                                stripeConnectedAccountId = "dolorem";
                                stripeCountry = "dolorem";
                                stripeCurrency = "dolor";
                                stripeReserveAmount = 186193L;
                                support = new PatchOrganizationRequestBodySupport() {{
                                    businessHours = "ipsum";
                                    chat = new PatchOrganizationRequestBodySupportChat() {{
                                        type = "hic";
                                        value = "excepturi";
                                    }};;
                                    contactNumber = "cum";
                                    email = "Jennifer68@yahoo.com";
                                }};;
                                supportChat = new PatchOrganizationRequestBodySupportChat1() {{
                                    id = "4100674e-bf69-4280-91ba-77a89ebf737a";
                                    name = "Mrs. Ray Collins";
                                }};;
                                theme = new PatchOrganizationRequestBodyTheme() {{
                                    colors = new PatchOrganizationRequestBodyThemeColors() {{
                                        primary = "accusamus";
                                        secondary = "ad";
                                    }};;
                                }};;
                            }};, "saepe");            

            PatchOrganizationResponse res = sdk.organizations.patchOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
