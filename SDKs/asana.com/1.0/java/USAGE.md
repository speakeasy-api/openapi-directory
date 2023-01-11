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
                    taskGid = "delectus";
                }};
                queryParams = new CreateAttachmentForTaskQueryParams() {{
                    limit = 4628205130743140522;
                    offset = "eveniet";
                    optFields = new String[]() {{
                        add("sit"),
                        add("est"),
                    }};
                    optPretty = true;
                }};
                request = new AttachmentRequest() {{
                    file = new AttachmentRequestFile() {{
                        content = "ipsa".getBytes();
                        file = "assumenda";
                    }};
                    name = "id";
                    resourceSubtype = "asana_file_attachments";
                    url = "ipsam";
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