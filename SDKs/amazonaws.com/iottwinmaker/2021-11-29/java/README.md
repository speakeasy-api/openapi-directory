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
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequestBody;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequest;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesResponse;
import org.openapis.openapi.models.shared.PropertyValueEntry;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.EntityPropertyReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutPropertyValuesRequest req = new BatchPutPropertyValuesRequest() {{
                requestBody = new BatchPutPropertyValuesRequestBody() {{
                    entries = new org.openapis.openapi.models.shared.PropertyValueEntry[]{{
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "provident";
                                entityId = "distinctio";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                }};
                                propertyName = "iure";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "debitis";
                                    timestamp = "2022-01-14T06:18:51.036Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 2726.56;
                                        expression = "suscipit";
                                        integerValue = 477665;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 812169;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("iusto", new DataValue() {{}});
                                            put("excepturi", new DataValue() {{}});
                                            put("nisi", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "recusandae";
                                            targetEntityId = "temporibus";
                                        }};
                                        stringValue = "ab";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "quis";
                                    timestamp = "2022-05-09T10:00:51.349Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 202.18;
                                        expression = "ipsam";
                                        integerValue = 832620;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 778157;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("at", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "at";
                                            targetEntityId = "maiores";
                                        }};
                                        stringValue = "molestiae";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "quod";
                                entityId = "quod";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                                propertyName = "nam";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "occaecati";
                                    timestamp = "2022-06-18T20:36:37.412Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 9446.69;
                                        expression = "optio";
                                        integerValue = 521848;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 414662;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("modi", new DataValue() {{}});
                                            put("qui", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "impedit";
                                            targetEntityId = "cum";
                                        }};
                                        stringValue = "esse";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "ipsum";
                                    timestamp = "2022-09-24T06:58:38.511Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 187.89;
                                        expression = "ad";
                                        integerValue = 617636;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 612096;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("natus", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "laboriosam";
                                            targetEntityId = "hic";
                                        }};
                                        stringValue = "saepe";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "fuga";
                                    timestamp = "2022-08-22T18:42:38.160Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 6130.64;
                                        expression = "iure";
                                        integerValue = 902349;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 99280;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("reiciendis", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "est";
                                            targetEntityId = "mollitia";
                                        }};
                                        stringValue = "laborum";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "dolores";
                                entityId = "dolorem";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "nobis");
                                    put("enim", "omnis");
                                }};
                                propertyName = "nemo";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "excepturi";
                                    timestamp = "2022-07-24T21:51:02.112Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 6342.74;
                                        expression = "doloribus";
                                        integerValue = 958950;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 652790;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("culpa", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "consequuntur";
                                            targetEntityId = "repellat";
                                        }};
                                        stringValue = "mollitia";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "occaecati";
                                    timestamp = "2022-08-02T18:07:51.623Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 4663.11;
                                        expression = "molestiae";
                                        integerValue = 244425;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 158969;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("vitae", new DataValue() {{}});
                                            put("laborum", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "animi";
                                            targetEntityId = "enim";
                                        }};
                                        stringValue = "odit";
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
                workspaceId = "quasi";
            }}            

            BatchPutPropertyValuesResponse res = sdk.batchPutPropertyValues(req);

            if (res.batchPutPropertyValuesResponse.isPresent()) {
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

* `batchPutPropertyValues` - Sets values for multiple time series properties.
* `createComponentType` - Creates a component type.
* `createEntity` - Creates an entity.
* `createScene` - Creates a scene.
* `createSyncJob` - This action creates a SyncJob.
* `createWorkspace` - Creates a workplace.
* `deleteComponentType` - Deletes a component type.
* `deleteEntity` - Deletes an entity.
* `deleteScene` - Deletes a scene.
* `deleteSyncJob` - Delete the SyncJob.
* `deleteWorkspace` - Deletes a workspace.
* `executeQuery` - Run queries to access information from your knowledge graph of entities within individual workspaces.
* `getComponentType` - Retrieves information about a component type.
* `getEntity` - Retrieves information about an entity.
* `getPricingPlan` - Gets the pricing plan.
* `getPropertyValue` - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* `getPropertyValueHistory` - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* `getScene` - Retrieves information about a scene.
* `getSyncJob` - Gets the SyncJob.
* `getWorkspace` - Retrieves information about a workspace.
* `listComponentTypes` - Lists all component types in a workspace.
* `listEntities` - Lists all entities in a workspace.
* `listScenes` - Lists all scenes in a workspace.
* `listSyncJobs` - List all SyncJobs.
* `listSyncResources` - Lists the sync resources.
* `listTagsForResource` - Lists all tags associated with a resource.
* `listWorkspaces` - Retrieves information about workspaces in the current account.
* `tagResource` - Adds tags to a resource.
* `untagResource` - Removes tags from a resource.
* `updateComponentType` - Updates information in a component type.
* `updateEntity` - Updates an entity.
* `updatePricingPlan` - Update the pricing plan.
* `updateScene` - Updates a scene.
* `updateWorkspace` - Updates a workspace.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
