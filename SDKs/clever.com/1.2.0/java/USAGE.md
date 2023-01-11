<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    oauth = new SchemeOauth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetContactRequest req = new GetContactRequest() {{
                pathParams = new GetContactPathParams() {{
                    id = "similique";
                }};
            }};

            GetContactResponse res = sdk.contacts.getContact(req);

            if (res.studentContactResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->