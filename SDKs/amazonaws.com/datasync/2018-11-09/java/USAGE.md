<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddStorageSystemRequest;
import org.openapis.openapi.models.operations.AddStorageSystemResponse;
import org.openapis.openapi.models.operations.AddStorageSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddStorageSystemRequest;
import org.openapis.openapi.models.shared.Credentials;
import org.openapis.openapi.models.shared.DiscoveryServerConfiguration;
import org.openapis.openapi.models.shared.DiscoverySystemTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddStorageSystemRequest req = new AddStorageSystemRequest(                new AddStorageSystemRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla",                 new Credentials("corrupti", "illum");,                 new DiscoveryServerConfiguration("vel") {{
                                                serverPort = 623564L;
                                            }};, DiscoverySystemTypeEnum.NET_APP_ONTAP) {{
                                cloudWatchLogGroupArn = "deserunt";
                                name = "Willie Gulgowski DVM";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("minus") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                    add(new TagListEntry("iusto") {{
                                        key = "placeat";
                                        value = "voluptatum";
                                    }}),
                                }};
                            }};, AddStorageSystemXAmzTargetEnum.FMRS_SERVICE_ADD_STORAGE_SYSTEM) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            AddStorageSystemResponse res = sdk.addStorageSystem(req);

            if (res.addStorageSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->