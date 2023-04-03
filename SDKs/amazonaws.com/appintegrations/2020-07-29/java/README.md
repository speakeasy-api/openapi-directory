# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyFileConfiguration;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyScheduleConfig;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequest;
import org.openapis.openapi.models.operations.CreateDataIntegrationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataIntegrationRequest req = new CreateDataIntegrationRequest() {{
                requestBody = new CreateDataIntegrationRequestBody() {{
                    clientToken = "corrupti";
                    description = "provident";
                    fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration() {{
                        filters = new java.util.HashMap<String, String[]>() {{
                            put("quibusdam", new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }});
                            put("vel", new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }});
                            put("magnam", new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }});
                        }};
                        folders = new String[]{{
                            add("minus"),
                            add("placeat"),
                        }};
                    }};
                    kmsKey = "voluptatum";
                    name = "iusto";
                    objectConfiguration = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                        put("nisi", new java.util.HashMap<String, String[]>() {{
                            put("temporibus", new String[]{{
                                add("quis"),
                            }});
                            put("veritatis", new String[]{{
                                add("perferendis"),
                                add("ipsam"),
                                add("repellendus"),
                            }});
                            put("sapiente", new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }});
                            put("molestiae", new String[]{{
                                add("quod"),
                                add("esse"),
                                add("totam"),
                                add("porro"),
                            }});
                        }});
                        put("dolorum", new java.util.HashMap<String, String[]>() {{
                            put("nam", new String[]{{
                                add("occaecati"),
                                add("fugit"),
                                add("deleniti"),
                            }});
                        }});
                        put("hic", new java.util.HashMap<String, String[]>() {{
                            put("totam", new String[]{{
                                add("commodi"),
                            }});
                            put("molestiae", new String[]{{
                                add("qui"),
                                add("impedit"),
                            }});
                            put("cum", new String[]{{
                                add("ipsum"),
                                add("excepturi"),
                            }});
                            put("aspernatur", new String[]{{
                                add("ad"),
                            }});
                        }});
                    }};
                    scheduleConfig = new CreateDataIntegrationRequestBodyScheduleConfig() {{
                        firstExecutionFrom = "natus";
                        object = "sed";
                        scheduleExpression = "iste";
                    }};
                    sourceURI = "dolor";
                    tags = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                        put("in", "corporis");
                    }};
                }};
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }}            

            CreateDataIntegrationResponse res = sdk.createDataIntegration(req);

            if (res.createDataIntegrationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createDataIntegration` - <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
* `createEventIntegration` - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
* `deleteDataIntegration` - <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `deleteEventIntegration` - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
* `getDataIntegration` - <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `getEventIntegration` - Returns information about the event integration.
* `listDataIntegrationAssociations` - <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `listDataIntegrations` - <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `listEventIntegrationAssociations` - Returns a paginated list of event integration associations in the account. 
* `listEventIntegrations` - Returns a paginated list of event integrations in the account.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateDataIntegration` - <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `updateEventIntegration` - Updates the description of an event integration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
