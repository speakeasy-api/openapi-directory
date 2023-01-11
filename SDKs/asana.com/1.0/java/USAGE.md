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
                    personalAccessToken = new SchemePersonalAccessToken() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAttachmentForTaskRequest req = new CreateAttachmentForTaskRequest() {{
                pathParams = new CreateAttachmentForTaskPathParams() {{
                    taskGid = "sit";
                }};
                queryParams = new CreateAttachmentForTaskQueryParams() {{
                    limit = 2259404117704393152;
                    offset = "culpa";
                    optFields = new String[]() {{
                        add("consequuntur"),
                        add("dolor"),
                    }};
                    optPretty = true;
                }};
                request = new AttachmentRequest() {{
                    file = new AttachmentRequestFile() {{
                        content = "voluptas".getBytes();
                        file = "fugit";
                    }};
                    name = "et";
                    resourceSubtype = "asana_file_attachments";
                    url = "rerum";
                }};
            }};

            CreateAttachmentForTaskResponse res = sdk.attachments.createAttachmentForTask(req);

            if (res.createAttachmentForTask200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->