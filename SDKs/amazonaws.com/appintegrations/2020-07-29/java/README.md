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
import org.openapis.openapi.models.operations.CreateDataIntegrationRequest;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyFileConfiguration;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyScheduleConfig;
import org.openapis.openapi.models.operations.CreateDataIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataIntegrationRequest req = new CreateDataIntegrationRequest(                new CreateDataIntegrationRequestBody("provident", "distinctio",                 new CreateDataIntegrationRequestBodyScheduleConfig() {{
                                                firstExecutionFrom = "quibusdam";
                                                object = "unde";
                                                scheduleExpression = "nulla";
                                            }};, "corrupti") {{
                                clientToken = "illum";
                                description = "vel";
                                fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration() {{
                                    filters = new java.util.HashMap<String, String[]>() {{
                                        put("deserunt", new String[]{{
                                            add("iure"),
                                            add("magnam"),
                                        }});
                                        put("debitis", new String[]{{
                                            add("delectus"),
                                        }});
                                        put("tempora", new String[]{{
                                            add("molestiae"),
                                            add("minus"),
                                        }});
                                    }};
                                    folders = new String[]{{
                                        add("voluptatum"),
                                        add("iusto"),
                                        add("excepturi"),
                                        add("nisi"),
                                    }};
                                }};;
                                objectConfiguration = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("temporibus", new java.util.HashMap<String, String[]>() {{
                                        put("quis", new String[]{{
                                            add("deserunt"),
                                        }});
                                    }});
                                    put("perferendis", new java.util.HashMap<String, String[]>() {{
                                        put("repellendus", new String[]{{
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                            add("at"),
                                        }});
                                        put("maiores", new String[]{{
                                            add("quod"),
                                            add("quod"),
                                        }});
                                    }});
                                    put("esse", new java.util.HashMap<String, String[]>() {{
                                        put("porro", new String[]{{
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }});
                                        put("occaecati", new String[]{{
                                            add("deleniti"),
                                        }});
                                        put("hic", new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }});
                                    }});
                                    put("modi", new java.util.HashMap<String, String[]>() {{
                                        put("impedit", new String[]{{
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }});
                                    }});
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "ad");
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            CreateDataIntegrationResponse res = sdk.createDataIntegration(req);

            if (res.createDataIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createDataIntegration](docs/sdk/README.md#createdataintegration) - <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
* [createEventIntegration](docs/sdk/README.md#createeventintegration) - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
* [deleteDataIntegration](docs/sdk/README.md#deletedataintegration) - <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [deleteEventIntegration](docs/sdk/README.md#deleteeventintegration) - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
* [getDataIntegration](docs/sdk/README.md#getdataintegration) - <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [getEventIntegration](docs/sdk/README.md#geteventintegration) - Returns information about the event integration.
* [listDataIntegrationAssociations](docs/sdk/README.md#listdataintegrationassociations) - <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [listDataIntegrations](docs/sdk/README.md#listdataintegrations) - <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [listEventIntegrationAssociations](docs/sdk/README.md#listeventintegrationassociations) - Returns a paginated list of event integration associations in the account. 
* [listEventIntegrations](docs/sdk/README.md#listeventintegrations) - Returns a paginated list of event integrations in the account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [updateDataIntegration](docs/sdk/README.md#updatedataintegration) - <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [updateEventIntegration](docs/sdk/README.md#updateeventintegration) - Updates the description of an event integration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
