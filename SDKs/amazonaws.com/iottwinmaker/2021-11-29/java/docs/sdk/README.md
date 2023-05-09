# SDK

## Overview

IoT TwinMaker is a service with which you can build operational digital twins of physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors, cameras, and enterprise applications so you can create data visualizations to monitor your physical factory, building, or industrial plant. You can use this real-world data to monitor operations and diagnose and repair errors.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iottwinmaker/>
### Available Operations

* [batchPutPropertyValues](#batchputpropertyvalues) - Sets values for multiple time series properties.
* [createComponentType](#createcomponenttype) - Creates a component type.
* [createEntity](#createentity) - Creates an entity.
* [createScene](#createscene) - Creates a scene.
* [createSyncJob](#createsyncjob) - This action creates a SyncJob.
* [createWorkspace](#createworkspace) - Creates a workplace.
* [deleteComponentType](#deletecomponenttype) - Deletes a component type.
* [deleteEntity](#deleteentity) - Deletes an entity.
* [deleteScene](#deletescene) - Deletes a scene.
* [deleteSyncJob](#deletesyncjob) - Delete the SyncJob.
* [deleteWorkspace](#deleteworkspace) - Deletes a workspace.
* [executeQuery](#executequery) - Run queries to access information from your knowledge graph of entities within individual workspaces.
* [getComponentType](#getcomponenttype) - Retrieves information about a component type.
* [getEntity](#getentity) - Retrieves information about an entity.
* [getPricingPlan](#getpricingplan) - Gets the pricing plan.
* [getPropertyValue](#getpropertyvalue) - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* [getPropertyValueHistory](#getpropertyvaluehistory) - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* [getScene](#getscene) - Retrieves information about a scene.
* [getSyncJob](#getsyncjob) - Gets the SyncJob.
* [getWorkspace](#getworkspace) - Retrieves information about a workspace.
* [listComponentTypes](#listcomponenttypes) - Lists all component types in a workspace.
* [listEntities](#listentities) - Lists all entities in a workspace.
* [listScenes](#listscenes) - Lists all scenes in a workspace.
* [listSyncJobs](#listsyncjobs) - List all SyncJobs.
* [listSyncResources](#listsyncresources) - Lists the sync resources.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a resource.
* [listWorkspaces](#listworkspaces) - Retrieves information about workspaces in the current account.
* [tagResource](#tagresource) - Adds tags to a resource.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateComponentType](#updatecomponenttype) - Updates information in a component type.
* [updateEntity](#updateentity) - Updates an entity.
* [updatePricingPlan](#updatepricingplan) - Update the pricing plan.
* [updateScene](#updatescene) - Updates a scene.
* [updateWorkspace](#updateworkspace) - Updates a workspace.

## batchPutPropertyValues

Sets values for multiple time series properties.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequest;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequestBody;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesResponse;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.EntityPropertyReference;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.PropertyValueEntry;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutPropertyValuesRequest req = new BatchPutPropertyValuesRequest(                new BatchPutPropertyValuesRequestBody(                new org.openapis.openapi.models.shared.PropertyValueEntry[]{{
                                                add(new PropertyValueEntry(                new EntityPropertyReference("rerum") {{
                                                                    componentName = "adipisci";
                                                                    entityId = "asperiores";
                                                                    externalIdProperty = new java.util.HashMap<String, String>() {{
                                                                        put("modi", "iste");
                                                                        put("dolorum", "deleniti");
                                                                        put("pariatur", "provident");
                                                                        put("nobis", "libero");
                                                                    }};
                                                                }};) {{
                                                    entityPropertyReference = new EntityPropertyReference("maxime") {{
                                                        componentName = "natus";
                                                        entityId = "magni";
                                                        externalIdProperty = new java.util.HashMap<String, String>() {{
                                                            put("quo", "illum");
                                                        }};
                                                        propertyName = "pariatur";
                                                    }};
                                                    propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 9755.22;
                                                                            expression = "perferendis";
                                                                            integerValue = 855804L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 11714L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("corporis", new DataValue() {{}});
                                                                                put("hic", new DataValue() {{}});
                                                                                put("libero", new DataValue() {{}});
                                                                                put("nobis", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "dolores";
                                                                                targetEntityId = "quis";
                                                                            }};;
                                                                            stringValue = "totam";
                                                                        }};) {{
                                                            time = "excepturi";
                                                            timestamp = OffsetDateTime.parse("2022-08-05T09:04:26.932Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 332.22;
                                                                expression = "ab";
                                                                integerValue = 982575L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 373291L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("autem", new DataValue() {{}});
                                                                    put("nam", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "eaque";
                                                                    targetEntityId = "pariatur";
                                                                }};
                                                                stringValue = "nemo";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 6082.53;
                                                                            expression = "facilis";
                                                                            integerValue = 596656L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 783645L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("blanditiis", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "error";
                                                                                targetEntityId = "eaque";
                                                                            }};;
                                                                            stringValue = "occaecati";
                                                                        }};) {{
                                                            time = "dignissimos";
                                                            timestamp = OffsetDateTime.parse("2022-08-30T06:29:24.707Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 1999.96;
                                                                expression = "eos";
                                                                integerValue = 18521L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 793698L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("dolor", new DataValue() {{}});
                                                                    put("vero", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "nostrum";
                                                                    targetEntityId = "hic";
                                                                }};
                                                                stringValue = "recusandae";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new PropertyValueEntry(                new EntityPropertyReference("expedita") {{
                                                                    componentName = "neque";
                                                                    entityId = "sed";
                                                                    externalIdProperty = new java.util.HashMap<String, String>() {{
                                                                        put("libero", "voluptas");
                                                                        put("deserunt", "quam");
                                                                    }};
                                                                }};) {{
                                                    entityPropertyReference = new EntityPropertyReference("excepturi") {{
                                                        componentName = "delectus";
                                                        entityId = "quaerat";
                                                        externalIdProperty = new java.util.HashMap<String, String>() {{
                                                            put("aliquid", "dolorem");
                                                            put("dolorem", "dolor");
                                                            put("qui", "ipsum");
                                                        }};
                                                        propertyName = "hic";
                                                    }};
                                                    propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 6963.44;
                                                                            expression = "voluptatibus";
                                                                            integerValue = 377752L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 179603L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("sit", new DataValue() {{}});
                                                                                put("fugiat", new DataValue() {{}});
                                                                                put("ab", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "soluta";
                                                                                targetEntityId = "dolorum";
                                                                            }};;
                                                                            stringValue = "iusto";
                                                                        }};) {{
                                                            time = "voluptate";
                                                            timestamp = OffsetDateTime.parse("2022-01-11T20:43:35.875Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2274.14;
                                                                expression = "dolorum";
                                                                integerValue = 254356L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 58029L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("iure", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "odio";
                                                                    targetEntityId = "quaerat";
                                                                }};
                                                                stringValue = "accusamus";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 1372.2;
                                                                            expression = "perferendis";
                                                                            integerValue = 229219L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 881586L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("saepe", new DataValue() {{}});
                                                                                put("suscipit", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "deserunt";
                                                                                targetEntityId = "provident";
                                                                            }};;
                                                                            stringValue = "minima";
                                                                        }};) {{
                                                            time = "voluptate";
                                                            timestamp = OffsetDateTime.parse("2021-12-05T07:07:55.687Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 6070.45;
                                                                expression = "necessitatibus";
                                                                integerValue = 714697L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 469497L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("voluptate", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "id";
                                                                    targetEntityId = "saepe";
                                                                }};
                                                                stringValue = "eius";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2155.07;
                                                                            expression = "quisquam";
                                                                            integerValue = 947371L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 730856L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("numquam", new DataValue() {{}});
                                                                                put("enim", new DataValue() {{}});
                                                                                put("dolorem", new DataValue() {{}});
                                                                                put("sapiente", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "totam";
                                                                                targetEntityId = "nihil";
                                                                            }};;
                                                                            stringValue = "sit";
                                                                        }};) {{
                                                            time = "repellendus";
                                                            timestamp = OffsetDateTime.parse("2021-09-28T20:14:16.452Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 0.55;
                                                                expression = "at";
                                                                integerValue = 311860L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 425451L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("officiis", new DataValue() {{}});
                                                                    put("qui", new DataValue() {{}});
                                                                    put("dolorum", new DataValue() {{}});
                                                                    put("a", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "esse";
                                                                    targetEntityId = "harum";
                                                                }};
                                                                stringValue = "iusto";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new PropertyValueEntry(                new EntityPropertyReference("veritatis") {{
                                                                    componentName = "nobis";
                                                                    entityId = "quos";
                                                                    externalIdProperty = new java.util.HashMap<String, String>() {{
                                                                        put("cupiditate", "aperiam");
                                                                        put("delectus", "dolorem");
                                                                        put("dolore", "labore");
                                                                    }};
                                                                }};) {{
                                                    entityPropertyReference = new EntityPropertyReference("soluta") {{
                                                        componentName = "ipsum";
                                                        entityId = "incidunt";
                                                        externalIdProperty = new java.util.HashMap<String, String>() {{
                                                            put("cupiditate", "maxime");
                                                        }};
                                                        propertyName = "pariatur";
                                                    }};
                                                    propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 1649.59;
                                                                            expression = "odio";
                                                                            integerValue = 124833L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 722081L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("voluptatem", new DataValue() {{}});
                                                                                put("cumque", new DataValue() {{}});
                                                                                put("soluta", new DataValue() {{}});
                                                                                put("nobis", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "et";
                                                                                targetEntityId = "saepe";
                                                                            }};;
                                                                            stringValue = "ipsum";
                                                                        }};) {{
                                                            time = "laborum";
                                                            timestamp = OffsetDateTime.parse("2022-06-12T20:49:16.541Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 1320.68;
                                                                expression = "dolores";
                                                                integerValue = 716860L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 396060L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("molestias", new DataValue() {{}});
                                                                    put("temporibus", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "qui";
                                                                    targetEntityId = "neque";
                                                                }};
                                                                stringValue = "fugit";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }});, "adipisci") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
            }};            

            BatchPutPropertyValuesResponse res = sdk.sdk.batchPutPropertyValues(req);

            if (res.batchPutPropertyValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComponentType

Creates a component type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComponentTypeRequest;
import org.openapis.openapi.models.operations.CreateComponentTypeRequestBody;
import org.openapis.openapi.models.operations.CreateComponentTypeResponse;
import org.openapis.openapi.models.shared.DataConnector;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.FunctionRequest;
import org.openapis.openapi.models.shared.GroupTypeEnum;
import org.openapis.openapi.models.shared.LambdaFunction;
import org.openapis.openapi.models.shared.PropertyDefinitionRequest;
import org.openapis.openapi.models.shared.PropertyGroupRequest;
import org.openapis.openapi.models.shared.Relationship;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.ScopeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentTypeRequest req = new CreateComponentTypeRequest(                new CreateComponentTypeRequestBody() {{
                                componentTypeName = "repellendus";
                                description = "porro";
                                extendsFrom = new String[]{{
                                    add("ut"),
                                    add("facilis"),
                                    add("cupiditate"),
                                    add("qui"),
                                }};
                                functions = new java.util.HashMap<String, org.openapis.openapi.models.shared.FunctionRequest>() {{
                                    put("laudantium", new FunctionRequest() {{
                                        implementedBy = new DataConnector() {{
                                            isNative = false;
                                            lambda = new LambdaFunction("occaecati") {{
                                                arn = "odio";
                                            }};
                                        }};
                                        requiredProperties = new String[]{{
                                            add("quisquam"),
                                            add("vero"),
                                            add("omnis"),
                                            add("quis"),
                                        }};
                                        scope = ScopeEnum.ENTITY;
                                    }});
                                }};
                                isSingleton = false;
                                propertyDefinitions = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyDefinitionRequest>() {{
                                    put("voluptate", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("vero", "tenetur");
                                        }};
                                        dataType = new DataType(TypeEnum.BOOLEAN_) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 9413.78;
                                                    expression = "distinctio";
                                                    integerValue = 799203L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 630448L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("vero", new DataValue() {{}});
                                                        put("ducimus", new DataValue() {{}});
                                                        put("dolore", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "quibusdam";
                                                        targetEntityId = "illum";
                                                    }};
                                                    stringValue = "sequi";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 6178.77;
                                                    expression = "impedit";
                                                    integerValue = 13236L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 347233L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("fugit", new DataValue() {{}});
                                                        put("porro", new DataValue() {{}});
                                                        put("maiores", new DataValue() {{}});
                                                        put("doloribus", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "iusto";
                                                        targetEntityId = "eligendi";
                                                    }};
                                                    stringValue = "ducimus";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "alias";
                                                targetComponentTypeId = "officia";
                                            }};
                                            type = TypeEnum.LONG_;
                                            unitOfMeasure = "ipsam";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 1369;
                                            expression = "vel";
                                            integerValue = 822118L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 189848L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("laudantium", new DataValue() {{}});
                                                put("dicta", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "dolor";
                                                targetEntityId = "maiores";
                                            }};
                                            stringValue = "quasi";
                                        }};
                                        displayName = "ex";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                    put("nulla", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("voluptatibus", "nostrum");
                                            put("sapiente", "quisquam");
                                            put("saepe", "ea");
                                        }};
                                        dataType = new DataType(TypeEnum.INTEGER) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3592.71;
                                                    expression = "veniam";
                                                    integerValue = 399499L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 301831L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("quo", new DataValue() {{}});
                                                        put("consectetur", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "recusandae";
                                                        targetEntityId = "aspernatur";
                                                    }};
                                                    stringValue = "minima";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 534.27;
                                                    expression = "a";
                                                    integerValue = 725595L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 11427L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("impedit", new DataValue() {{}});
                                                        put("aliquam", new DataValue() {{}});
                                                        put("fugit", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "accusamus";
                                                        targetEntityId = "inventore";
                                                    }};
                                                    stringValue = "non";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 896.03;
                                                    expression = "dolorum";
                                                    integerValue = 672048L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 245367L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("autem", new DataValue() {{}});
                                                        put("nobis", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "quas";
                                                        targetEntityId = "assumenda";
                                                    }};
                                                    stringValue = "nulla";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3790.34;
                                                    expression = "libero";
                                                    integerValue = 96549L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 256139L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("provident", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "ipsa";
                                                        targetEntityId = "molestiae";
                                                    }};
                                                    stringValue = "magnam";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "odio";
                                                targetComponentTypeId = "eius";
                                            }};
                                            type = TypeEnum.BOOLEAN_;
                                            unitOfMeasure = "esse";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 6832.82;
                                            expression = "reprehenderit";
                                            integerValue = 695626L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 283519L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("suscipit", new DataValue() {{}});
                                                put("assumenda", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "eos";
                                                targetEntityId = "praesentium";
                                            }};
                                            stringValue = "quisquam";
                                        }};
                                        displayName = "veritatis";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                    put("ipsa", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("quidem", "neque");
                                            put("quo", "illum");
                                            put("quo", "fuga");
                                        }};
                                        dataType = new DataType(TypeEnum.STRING) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 1783.67;
                                                    expression = "voluptas";
                                                    integerValue = 69859L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 9688L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("debitis", new DataValue() {{}});
                                                        put("ipsam", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "aspernatur";
                                                        targetEntityId = "sequi";
                                                    }};
                                                    stringValue = "quo";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 4598.56;
                                                    expression = "recusandae";
                                                    integerValue = 44612L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 799796L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("inventore", new DataValue() {{}});
                                                        put("nihil", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "totam";
                                                        targetEntityId = "accusamus";
                                                    }};
                                                    stringValue = "aliquam";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "odio";
                                                targetComponentTypeId = "occaecati";
                                            }};
                                            type = TypeEnum.BOOLEAN_;
                                            unitOfMeasure = "sapiente";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 6455.7;
                                            expression = "molestiae";
                                            integerValue = 35362L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 430402L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("praesentium", new DataValue() {{}});
                                                put("consequuntur", new DataValue() {{}});
                                                put("deleniti", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "fugit";
                                                targetEntityId = "fuga";
                                            }};
                                            stringValue = "mollitia";
                                        }};
                                        displayName = "incidunt";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                    put("atque", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("minima", "nisi");
                                        }};
                                        dataType = new DataType(TypeEnum.BOOLEAN_) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 9564.06;
                                                    expression = "consequuntur";
                                                    integerValue = 187131L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 903984L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("atque", new DataValue() {{}});
                                                        put("et", new DataValue() {{}});
                                                        put("esse", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "eveniet";
                                                        targetEntityId = "accusamus";
                                                    }};
                                                    stringValue = "veritatis";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "esse";
                                                targetComponentTypeId = "quod";
                                            }};
                                            type = TypeEnum.DOUBLE;
                                            unitOfMeasure = "vero";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 934.59;
                                            expression = "saepe";
                                            integerValue = 426306L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 473221L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("occaecati", new DataValue() {{}});
                                                put("minima", new DataValue() {{}});
                                                put("distinctio", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "eligendi";
                                                targetEntityId = "sit";
                                            }};
                                            stringValue = "culpa";
                                        }};
                                        displayName = "tempore";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                }};
                                propertyGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyGroupRequest>() {{
                                    put("cumque", new PropertyGroupRequest() {{
                                        groupType = GroupTypeEnum.TABULAR;
                                        propertyNames = new String[]{{
                                            add("consequatur"),
                                        }};
                                    }});
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quaerat", "sapiente");
                                    put("consectetur", "esse");
                                    put("blanditiis", "provident");
                                    put("a", "nulla");
                                }};
                            }};, "quas", "esse") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "a";
                xAmzCredential = "error";
                xAmzDate = "sint";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "quia";
            }};            

            CreateComponentTypeResponse res = sdk.sdk.createComponentType(req);

            if (res.createComponentTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEntity

Creates an entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEntityRequest;
import org.openapis.openapi.models.operations.CreateEntityRequestBody;
import org.openapis.openapi.models.operations.CreateEntityResponse;
import org.openapis.openapi.models.shared.ComponentPropertyGroupRequest;
import org.openapis.openapi.models.shared.ComponentRequest;
import org.openapis.openapi.models.shared.GroupTypeEnum;
import org.openapis.openapi.models.shared.PropertyGroupUpdateTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEntityRequest req = new CreateEntityRequest(                new CreateEntityRequestBody("asperiores") {{
                                components = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentRequest>() {{
                                    put("veritatis", new ComponentRequest() {{
                                        componentTypeId = "consequuntur";
                                        description = "quasi";
                                        properties = "similique";
                                        propertyGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("aliquid", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("quae"),
                                                    add("earum"),
                                                    add("vel"),
                                                    add("in"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                            put("libero", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("soluta"),
                                                    add("accusantium"),
                                                    add("aliquam"),
                                                    add("sapiente"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                            put("ullam", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("ullam"),
                                                    add("nisi"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                        }};
                                    }});
                                    put("voluptatum", new ComponentRequest() {{
                                        componentTypeId = "qui";
                                        description = "quibusdam";
                                        properties = "ex";
                                        propertyGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("itaque", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("architecto"),
                                                    add("omnis"),
                                                    add("tenetur"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                            put("at", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("voluptate"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                            put("minima", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("consectetur"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                        }};
                                    }});
                                    put("iste", new ComponentRequest() {{
                                        componentTypeId = "temporibus";
                                        description = "accusantium";
                                        properties = "rem";
                                        propertyGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("laudantium", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("mollitia"),
                                                    add("ab"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.DELETE;
                                            }});
                                        }};
                                    }});
                                    put("non", new ComponentRequest() {{
                                        componentTypeId = "voluptatem";
                                        description = "dolor";
                                        properties = "occaecati";
                                        propertyGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("impedit", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("voluptas"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                            put("dignissimos", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("maiores"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.DELETE;
                                            }});
                                        }};
                                    }});
                                }};
                                description = "velit";
                                entityId = "voluptatibus";
                                parentEntityId = "voluptas";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aperiam", "ea");
                                    put("quaerat", "consequuntur");
                                    put("repellendus", "officia");
                                    put("maxime", "dignissimos");
                                }};
                            }};, "officia") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quae";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "porro";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "labore";
            }};            

            CreateEntityResponse res = sdk.sdk.createEntity(req);

            if (res.createEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScene

Creates a scene.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSceneRequest;
import org.openapis.openapi.models.operations.CreateSceneRequestBody;
import org.openapis.openapi.models.operations.CreateSceneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSceneRequest req = new CreateSceneRequest(                new CreateSceneRequestBody("adipisci", "fuga") {{
                                capabilities = new String[]{{
                                    add("suscipit"),
                                    add("velit"),
                                    add("culpa"),
                                }};
                                description = "est";
                                sceneMetadata = new java.util.HashMap<String, String>() {{
                                    put("totam", "fugiat");
                                    put("vel", "ducimus");
                                    put("quos", "vel");
                                    put("labore", "possimus");
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("cum", "commodi");
                                    put("in", "corporis");
                                    put("reiciendis", "assumenda");
                                }};
                            }};, "nemo") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "aperiam";
                xAmzDate = "cum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "in";
                xAmzSignedHeaders = "exercitationem";
            }};            

            CreateSceneResponse res = sdk.sdk.createScene(req);

            if (res.createSceneResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncJob

This action creates a SyncJob.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncJobRequest;
import org.openapis.openapi.models.operations.CreateSyncJobRequestBody;
import org.openapis.openapi.models.operations.CreateSyncJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSyncJobRequest req = new CreateSyncJobRequest(                new CreateSyncJobRequestBody("facere") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("doloribus", "suscipit");
                                    put("reiciendis", "quidem");
                                }};
                            }};, "saepe", "necessitatibus") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "asperiores";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "non";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateSyncJobResponse res = sdk.sdk.createSyncJob(req);

            if (res.createSyncJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspace

Creates a workplace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.CreateWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspaceRequest req = new CreateWorkspaceRequest(                new CreateWorkspaceRequestBody("a", "debitis") {{
                                description = "consectetur";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("harum", "laboriosam");
                                    put("ipsa", "voluptates");
                                }};
                            }};, "libero") {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "similique";
                xAmzDate = "tempora";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "voluptas";
            }};            

            CreateWorkspaceResponse res = sdk.sdk.createWorkspace(req);

            if (res.createWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComponentType

Deletes a component type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteComponentTypeRequest;
import org.openapis.openapi.models.operations.DeleteComponentTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteComponentTypeRequest req = new DeleteComponentTypeRequest("minima", "nobis") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "minus";
                xAmzDate = "dolores";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteComponentTypeResponse res = sdk.sdk.deleteComponentType(req);

            if (res.deleteComponentTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEntity

Deletes an entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEntityRequest;
import org.openapis.openapi.models.operations.DeleteEntityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEntityRequest req = new DeleteEntityRequest("officiis", "temporibus") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
                isRecursive = false;
            }};            

            DeleteEntityResponse res = sdk.sdk.deleteEntity(req);

            if (res.deleteEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScene

Deletes a scene.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSceneRequest;
import org.openapis.openapi.models.operations.DeleteSceneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSceneRequest req = new DeleteSceneRequest("corrupti", "pariatur") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "exercitationem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "sit";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "sed";
            }};            

            DeleteSceneResponse res = sdk.sdk.deleteScene(req);

            if (res.deleteSceneResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSyncJob

Delete the SyncJob.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncJobRequest;
import org.openapis.openapi.models.operations.DeleteSyncJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSyncJobRequest req = new DeleteSyncJobRequest("explicabo", "asperiores") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "expedita";
                xAmzDate = "ab";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteSyncJobResponse res = sdk.sdk.deleteSyncJob(req);

            if (res.deleteSyncJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspace

Deletes a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkspaceRequest req = new DeleteWorkspaceRequest("in") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "unde";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "suscipit";
            }};            

            DeleteWorkspaceResponse res = sdk.sdk.deleteWorkspace(req);

            if (res.deleteWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeQuery

Run queries to access information from your knowledge graph of entities within individual workspaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteQueryRequest;
import org.openapis.openapi.models.operations.ExecuteQueryRequestBody;
import org.openapis.openapi.models.operations.ExecuteQueryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteQueryRequest req = new ExecuteQueryRequest(                new ExecuteQueryRequestBody("debitis", "illo") {{
                                maxResults = 967795L;
                                nextToken = "perferendis";
                            }};) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "incidunt";
                xAmzDate = "sed";
                xAmzSecurityToken = "provident";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "necessitatibus";
                maxResults = "ipsum";
                nextToken = "ea";
            }};            

            ExecuteQueryResponse res = sdk.sdk.executeQuery(req);

            if (res.executeQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponentType

Retrieves information about a component type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentTypeRequest;
import org.openapis.openapi.models.operations.GetComponentTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentTypeRequest req = new GetComponentTypeRequest("quos", "voluptatibus") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "voluptate";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "non";
            }};            

            GetComponentTypeResponse res = sdk.sdk.getComponentType(req);

            if (res.getComponentTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntity

Retrieves information about an entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntityRequest;
import org.openapis.openapi.models.operations.GetEntityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntityRequest req = new GetEntityRequest("praesentium", "facilis") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            GetEntityResponse res = sdk.sdk.getEntity(req);

            if (res.getEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPricingPlan

Gets the pricing plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPricingPlanRequest;
import org.openapis.openapi.models.operations.GetPricingPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPricingPlanRequest req = new GetPricingPlanRequest() {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "minima";
                xAmzCredential = "recusandae";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "aperiam";
            }};            

            GetPricingPlanResponse res = sdk.sdk.getPricingPlan(req);

            if (res.getPricingPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPropertyValue

<p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPropertyValueRequest;
import org.openapis.openapi.models.operations.GetPropertyValueRequestBody;
import org.openapis.openapi.models.operations.GetPropertyValueRequestBodyTabularConditions;
import org.openapis.openapi.models.operations.GetPropertyValueResponse;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.OrderBy;
import org.openapis.openapi.models.shared.OrderEnum;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPropertyValueRequest req = new GetPropertyValueRequest(                new GetPropertyValueRequestBody(                new String[]{{
                                                add("veniam"),
                                                add("in"),
                                            }}) {{
                                componentName = "officiis";
                                componentTypeId = "beatae";
                                entityId = "laudantium";
                                maxResults = 348476L;
                                nextToken = "praesentium";
                                propertyGroupName = "cum";
                                tabularConditions = new GetPropertyValueRequestBodyTabularConditions() {{
                                    orderBy = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy("error") {{
                                            order = OrderEnum.DESCENDING;
                                            propertyName = "voluptatum";
                                        }}),
                                        add(new OrderBy("debitis") {{
                                            order = OrderEnum.DESCENDING;
                                            propertyName = "expedita";
                                        }}),
                                    }};
                                    propertyFilters = new org.openapis.openapi.models.shared.PropertyFilter[]{{
                                        add(new PropertyFilter() {{
                                            operator = "dolorum";
                                            propertyName = "nostrum";
                                            value = new DataValue() {{
                                                booleanValue = false;
                                                doubleValue = 6390.28;
                                                expression = "dolorum";
                                                integerValue = 548361L;
                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                    add(new DataValue() {{}}),
                                                    add(new DataValue() {{}}),
                                                    add(new DataValue() {{}}),
                                                    add(new DataValue() {{}}),
                                                }};
                                                longValue = 272683L;
                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                    put("fugit", new DataValue() {{}});
                                                    put("ut", new DataValue() {{}});
                                                    put("fugiat", new DataValue() {{}});
                                                }};
                                                relationshipValue = new RelationshipValue() {{
                                                    targetComponentName = "voluptatem";
                                                    targetEntityId = "culpa";
                                                }};
                                                stringValue = "expedita";
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, "magnam") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
                maxResults = "corporis";
                nextToken = "et";
            }};            

            GetPropertyValueResponse res = sdk.sdk.getPropertyValue(req);

            if (res.getPropertyValueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPropertyValueHistory

<p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPropertyValueHistoryRequest;
import org.openapis.openapi.models.operations.GetPropertyValueHistoryRequestBody;
import org.openapis.openapi.models.operations.GetPropertyValueHistoryRequestBodyInterpolation;
import org.openapis.openapi.models.operations.GetPropertyValueHistoryRequestBodyOrderByTimeEnum;
import org.openapis.openapi.models.operations.GetPropertyValueHistoryResponse;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.InterpolationTypeEnum;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPropertyValueHistoryRequest req = new GetPropertyValueHistoryRequest(                new GetPropertyValueHistoryRequestBody(                new String[]{{
                                                add("sed"),
                                                add("sit"),
                                            }}) {{
                                componentName = "vel";
                                componentTypeId = "nostrum";
                                endDateTime = OffsetDateTime.parse("2021-02-18T15:46:03.371Z");
                                endTime = "consequatur";
                                entityId = "incidunt";
                                interpolation = new GetPropertyValueHistoryRequestBodyInterpolation() {{
                                    interpolationType = InterpolationTypeEnum.LINEAR;
                                    intervalInSeconds = 968865L;
                                }};;
                                maxResults = 209750L;
                                nextToken = "harum";
                                orderByTime = GetPropertyValueHistoryRequestBodyOrderByTimeEnum.ASCENDING;
                                propertyFilters = new org.openapis.openapi.models.shared.PropertyFilter[]{{
                                    add(new PropertyFilter() {{
                                        operator = "occaecati";
                                        propertyName = "labore";
                                        value = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 6952.7;
                                            expression = "atque";
                                            integerValue = 671957L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 948861L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("alias", new DataValue() {{}});
                                                put("amet", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "deserunt";
                                                targetEntityId = "voluptate";
                                            }};
                                            stringValue = "unde";
                                        }};
                                    }}),
                                }};
                                startDateTime = OffsetDateTime.parse("2021-03-27T07:55:22.584Z");
                                startTime = "repellendus";
                            }};, "delectus") {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "est";
                xAmzDate = "quidem";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "fuga";
                maxResults = "praesentium";
                nextToken = "mollitia";
            }};            

            GetPropertyValueHistoryResponse res = sdk.sdk.getPropertyValueHistory(req);

            if (res.getPropertyValueHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScene

Retrieves information about a scene.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSceneRequest;
import org.openapis.openapi.models.operations.GetSceneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSceneRequest req = new GetSceneRequest("voluptatem", "quisquam") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "atque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "suscipit";
            }};            

            GetSceneResponse res = sdk.sdk.getScene(req);

            if (res.getSceneResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyncJob

Gets the SyncJob.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyncJobRequest;
import org.openapis.openapi.models.operations.GetSyncJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSyncJobRequest req = new GetSyncJobRequest("maxime") {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "esse";
                xAmzCredential = "amet";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ea";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "error";
                workspace = "officiis";
            }};            

            GetSyncJobResponse res = sdk.sdk.getSyncJob(req);

            if (res.getSyncJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspace

Retrieves information about a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceRequest;
import org.openapis.openapi.models.operations.GetWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkspaceRequest req = new GetWorkspaceRequest("accusamus") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "aspernatur";
                xAmzDate = "ex";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "at";
            }};            

            GetWorkspaceResponse res = sdk.sdk.getWorkspace(req);

            if (res.getWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponentTypes

Lists all component types in a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentTypesRequest;
import org.openapis.openapi.models.operations.ListComponentTypesRequestBody;
import org.openapis.openapi.models.operations.ListComponentTypesResponse;
import org.openapis.openapi.models.shared.ListComponentTypesFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentTypesRequest req = new ListComponentTypesRequest(                new ListComponentTypesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ListComponentTypesFilter[]{{
                                    add(new ListComponentTypesFilter() {{
                                        extendsFrom = "suscipit";
                                        isAbstract = false;
                                        namespace = "repudiandae";
                                    }}),
                                    add(new ListComponentTypesFilter() {{
                                        extendsFrom = "atque";
                                        isAbstract = false;
                                        namespace = "atque";
                                    }}),
                                    add(new ListComponentTypesFilter() {{
                                        extendsFrom = "sunt";
                                        isAbstract = false;
                                        namespace = "recusandae";
                                    }}),
                                }};
                                maxResults = 680697L;
                                nextToken = "repellendus";
                            }};, "labore") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "repudiandae";
                xAmzDate = "dicta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dolores";
                maxResults = "enim";
                nextToken = "laboriosam";
            }};            

            ListComponentTypesResponse res = sdk.sdk.listComponentTypes(req);

            if (res.listComponentTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntities

Lists all entities in a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntitiesRequest;
import org.openapis.openapi.models.operations.ListEntitiesRequestBody;
import org.openapis.openapi.models.operations.ListEntitiesResponse;
import org.openapis.openapi.models.shared.ListEntitiesFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntitiesRequest req = new ListEntitiesRequest(                new ListEntitiesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ListEntitiesFilter[]{{
                                    add(new ListEntitiesFilter() {{
                                        componentTypeId = "molestias";
                                        externalId = "magnam";
                                        parentEntityId = "saepe";
                                    }}),
                                    add(new ListEntitiesFilter() {{
                                        componentTypeId = "consequuntur";
                                        externalId = "occaecati";
                                        parentEntityId = "officiis";
                                    }}),
                                    add(new ListEntitiesFilter() {{
                                        componentTypeId = "perspiciatis";
                                        externalId = "in";
                                        parentEntityId = "adipisci";
                                    }}),
                                    add(new ListEntitiesFilter() {{
                                        componentTypeId = "eveniet";
                                        externalId = "occaecati";
                                        parentEntityId = "consequuntur";
                                    }}),
                                }};
                                maxResults = 145870L;
                                nextToken = "id";
                            }};, "quis") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "error";
                xAmzCredential = "illo";
                xAmzDate = "corporis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "non";
                maxResults = "vero";
                nextToken = "doloremque";
            }};            

            ListEntitiesResponse res = sdk.sdk.listEntities(req);

            if (res.listEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScenes

Lists all scenes in a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScenesRequest;
import org.openapis.openapi.models.operations.ListScenesRequestBody;
import org.openapis.openapi.models.operations.ListScenesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListScenesRequest req = new ListScenesRequest(                new ListScenesRequestBody() {{
                                maxResults = 59944L;
                                nextToken = "totam";
                            }};, "quae") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "qui";
                xAmzDate = "cum";
                xAmzSecurityToken = "iure";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ratione";
                maxResults = "laborum";
                nextToken = "distinctio";
            }};            

            ListScenesResponse res = sdk.sdk.listScenes(req);

            if (res.listScenesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncJobs

List all SyncJobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncJobsRequest;
import org.openapis.openapi.models.operations.ListSyncJobsRequestBody;
import org.openapis.openapi.models.operations.ListSyncJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSyncJobsRequest req = new ListSyncJobsRequest(                new ListSyncJobsRequestBody() {{
                                maxResults = 523006L;
                                nextToken = "aliquam";
                            }};, "ad") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "alias";
                xAmzCredential = "corporis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "voluptas";
                maxResults = "alias";
                nextToken = "maiores";
            }};            

            ListSyncJobsResponse res = sdk.sdk.listSyncJobs(req);

            if (res.listSyncJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncResources

Lists the sync resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncResourcesRequest;
import org.openapis.openapi.models.operations.ListSyncResourcesRequestBody;
import org.openapis.openapi.models.operations.ListSyncResourcesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyncResourceFilter;
import org.openapis.openapi.models.shared.SyncResourceStateEnum;
import org.openapis.openapi.models.shared.SyncResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSyncResourcesRequest req = new ListSyncResourcesRequest(                new ListSyncResourcesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.SyncResourceFilter[]{{
                                    add(new SyncResourceFilter() {{
                                        externalId = "id";
                                        resourceId = "minima";
                                        resourceType = SyncResourceTypeEnum.ENTITY;
                                        state = SyncResourceStateEnum.IN_SYNC;
                                    }}),
                                }};
                                maxResults = 200364L;
                                nextToken = "quae";
                            }};, "recusandae", "omnis") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "ex";
                xAmzDate = "ut";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "debitis";
                maxResults = "laudantium";
                nextToken = "eum";
            }};            

            ListSyncResourcesResponse res = sdk.sdk.listSyncResources(req);

            if (res.listSyncResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags associated with a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceRequestBody;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("recusandae") {{
                                maxResults = 456520L;
                                nextToken = "provident";
                            }};) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "quasi";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkspaces

Retrieves information about workspaces in the current account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkspacesRequest;
import org.openapis.openapi.models.operations.ListWorkspacesRequestBody;
import org.openapis.openapi.models.operations.ListWorkspacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkspacesRequest req = new ListWorkspacesRequest(                new ListWorkspacesRequestBody() {{
                                maxResults = 343392L;
                                nextToken = "mollitia";
                            }};) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "animi";
                xAmzDate = "ex";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "repellat";
                maxResults = "doloribus";
                nextToken = "ullam";
            }};            

            ListWorkspacesResponse res = sdk.sdk.listWorkspaces(req);

            if (res.listWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("nam",                 new java.util.HashMap<String, String>() {{
                                                put("officia", "laborum");
                                                put("placeat", "modi");
                                                put("voluptatibus", "molestias");
                                                put("officiis", "sapiente");
                                            }});) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "rerum";
                xAmzDate = "tempora";
                xAmzSecurityToken = "quis";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "fugit";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("quae",                 new String[]{{
                                add("velit"),
                            }}) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "eum";
                xAmzCredential = "eius";
                xAmzDate = "rem";
                xAmzSecurityToken = "at";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "eos";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComponentType

Updates information in a component type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateComponentTypeRequest;
import org.openapis.openapi.models.operations.UpdateComponentTypeRequestBody;
import org.openapis.openapi.models.operations.UpdateComponentTypeResponse;
import org.openapis.openapi.models.shared.DataConnector;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.FunctionRequest;
import org.openapis.openapi.models.shared.GroupTypeEnum;
import org.openapis.openapi.models.shared.LambdaFunction;
import org.openapis.openapi.models.shared.PropertyDefinitionRequest;
import org.openapis.openapi.models.shared.PropertyGroupRequest;
import org.openapis.openapi.models.shared.Relationship;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.ScopeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateComponentTypeRequest req = new UpdateComponentTypeRequest(                new UpdateComponentTypeRequestBody() {{
                                componentTypeName = "eum";
                                description = "dicta";
                                extendsFrom = new String[]{{
                                    add("beatae"),
                                    add("cupiditate"),
                                }};
                                functions = new java.util.HashMap<String, org.openapis.openapi.models.shared.FunctionRequest>() {{
                                    put("earum", new FunctionRequest() {{
                                        implementedBy = new DataConnector() {{
                                            isNative = false;
                                            lambda = new LambdaFunction("hic") {{
                                                arn = "soluta";
                                            }};
                                        }};
                                        requiredProperties = new String[]{{
                                            add("eaque"),
                                            add("earum"),
                                            add("perspiciatis"),
                                            add("maiores"),
                                        }};
                                        scope = ScopeEnum.WORKSPACE;
                                    }});
                                    put("aliquid", new FunctionRequest() {{
                                        implementedBy = new DataConnector() {{
                                            isNative = false;
                                            lambda = new LambdaFunction("suscipit") {{
                                                arn = "porro";
                                            }};
                                        }};
                                        requiredProperties = new String[]{{
                                            add("fugit"),
                                        }};
                                        scope = ScopeEnum.WORKSPACE;
                                    }});
                                    put("fuga", new FunctionRequest() {{
                                        implementedBy = new DataConnector() {{
                                            isNative = false;
                                            lambda = new LambdaFunction("animi") {{
                                                arn = "ratione";
                                            }};
                                        }};
                                        requiredProperties = new String[]{{
                                            add("nulla"),
                                            add("consequatur"),
                                            add("quasi"),
                                            add("et"),
                                        }};
                                        scope = ScopeEnum.ENTITY;
                                    }});
                                }};
                                isSingleton = false;
                                propertyDefinitions = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyDefinitionRequest>() {{
                                    put("occaecati", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("adipisci", "quasi");
                                            put("magni", "doloribus");
                                        }};
                                        dataType = new DataType(TypeEnum.RELATIONSHIP) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 8965.82;
                                                    expression = "ipsa";
                                                    integerValue = 271113L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 473190L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("iusto", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "esse";
                                                        targetEntityId = "praesentium";
                                                    }};
                                                    stringValue = "maiores";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 9672.6;
                                                    expression = "vel";
                                                    integerValue = 99958L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 39650L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("odio", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "tempora";
                                                        targetEntityId = "esse";
                                                    }};
                                                    stringValue = "ex";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 2352.63;
                                                    expression = "aliquid";
                                                    integerValue = 58870L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 123844L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("fugiat", new DataValue() {{}});
                                                        put("expedita", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "aliquid";
                                                        targetEntityId = "officia";
                                                    }};
                                                    stringValue = "suscipit";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3991.61;
                                                    expression = "perferendis";
                                                    integerValue = 431760L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 614528L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("ab", new DataValue() {{}});
                                                        put("error", new DataValue() {{}});
                                                        put("possimus", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "voluptates";
                                                        targetEntityId = "mollitia";
                                                    }};
                                                    stringValue = "laborum";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "libero";
                                                targetComponentTypeId = "ad";
                                            }};
                                            type = TypeEnum.INTEGER;
                                            unitOfMeasure = "enim";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 8333.16;
                                            expression = "ex";
                                            integerValue = 775803L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 281153L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("expedita", new DataValue() {{}});
                                                put("voluptatem", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "molestias";
                                                targetEntityId = "cum";
                                            }};
                                            stringValue = "aliquid";
                                        }};
                                        displayName = "beatae";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                    put("voluptatum", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("veritatis", "rerum");
                                            put("est", "culpa");
                                            put("voluptatem", "sapiente");
                                        }};
                                        dataType = new DataType(TypeEnum.MAP) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 1032.98;
                                                    expression = "fuga";
                                                    integerValue = 867168L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 29190L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("deleniti", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "earum";
                                                        targetEntityId = "ex";
                                                    }};
                                                    stringValue = "sapiente";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 5241.84;
                                                    expression = "minus";
                                                    integerValue = 365100L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 190567L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("perferendis", new DataValue() {{}});
                                                        put("illum", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "totam";
                                                        targetEntityId = "impedit";
                                                    }};
                                                    stringValue = "quibusdam";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 7205.28;
                                                    expression = "ipsam";
                                                    integerValue = 633415L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 307376L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("deleniti", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "veritatis";
                                                        targetEntityId = "tempora";
                                                    }};
                                                    stringValue = "dolor";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 86.89;
                                                    expression = "architecto";
                                                    integerValue = 24944L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 144286L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("laudantium", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "quae";
                                                        targetEntityId = "dolor";
                                                    }};
                                                    stringValue = "fugiat";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "ipsam";
                                                targetComponentTypeId = "consequuntur";
                                            }};
                                            type = TypeEnum.RELATIONSHIP;
                                            unitOfMeasure = "quas";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 7734.56;
                                            expression = "officiis";
                                            integerValue = 456410L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 153369L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("nesciunt", new DataValue() {{}});
                                                put("expedita", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "eum";
                                                targetEntityId = "vel";
                                            }};
                                            stringValue = "voluptatum";
                                        }};
                                        displayName = "magnam";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                    put("exercitationem", new PropertyDefinitionRequest() {{
                                        configuration = new java.util.HashMap<String, String>() {{
                                            put("porro", "autem");
                                        }};
                                        dataType = new DataType(TypeEnum.DOUBLE) {{
                                            allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3883.19;
                                                    expression = "recusandae";
                                                    integerValue = 160393L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 350207L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("quasi", new DataValue() {{}});
                                                        put("nisi", new DataValue() {{}});
                                                        put("at", new DataValue() {{}});
                                                        put("vero", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "est";
                                                        targetEntityId = "harum";
                                                    }};
                                                    stringValue = "sequi";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 9873.49;
                                                    expression = "repudiandae";
                                                    integerValue = 759283L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 364544L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("blanditiis", new DataValue() {{}});
                                                        put("officia", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "voluptas";
                                                        targetEntityId = "numquam";
                                                    }};
                                                    stringValue = "nemo";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 5510.79;
                                                    expression = "eius";
                                                    integerValue = 131903L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 200516L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("laudantium", new DataValue() {{}});
                                                        put("incidunt", new DataValue() {{}});
                                                        put("quasi", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "rem";
                                                        targetEntityId = "fugiat";
                                                    }};
                                                    stringValue = "dicta";
                                                }}),
                                                add(new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3955.44;
                                                    expression = "consequuntur";
                                                    integerValue = 233078L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 585432L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("soluta", new DataValue() {{}});
                                                        put("alias", new DataValue() {{}});
                                                        put("omnis", new DataValue() {{}});
                                                        put("eos", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "occaecati";
                                                        targetEntityId = "iste";
                                                    }};
                                                    stringValue = "magni";
                                                }}),
                                            }};
                                            nestedType = new DataType() {{}};
                                            relationship = new Relationship() {{
                                                relationshipType = "inventore";
                                                targetComponentTypeId = "fuga";
                                            }};
                                            type = TypeEnum.MAP;
                                            unitOfMeasure = "voluptatibus";
                                        }};
                                        defaultValue = new DataValue() {{
                                            booleanValue = false;
                                            doubleValue = 6085.93;
                                            expression = "delectus";
                                            integerValue = 328379L;
                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                                add(new DataValue() {{}}),
                                            }};
                                            longValue = 802692L;
                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                put("temporibus", new DataValue() {{}});
                                                put("quos", new DataValue() {{}});
                                            }};
                                            relationshipValue = new RelationshipValue() {{
                                                targetComponentName = "commodi";
                                                targetEntityId = "itaque";
                                            }};
                                            stringValue = "commodi";
                                        }};
                                        displayName = "totam";
                                        isExternalId = false;
                                        isRequiredInEntity = false;
                                        isStoredExternally = false;
                                        isTimeSeries = false;
                                    }});
                                }};
                                propertyGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyGroupRequest>() {{
                                    put("modi", new PropertyGroupRequest() {{
                                        groupType = GroupTypeEnum.TABULAR;
                                        propertyNames = new String[]{{
                                            add("vero"),
                                            add("voluptatem"),
                                            add("ipsam"),
                                        }};
                                    }});
                                    put("vel", new PropertyGroupRequest() {{
                                        groupType = GroupTypeEnum.TABULAR;
                                        propertyNames = new String[]{{
                                            add("quasi"),
                                        }};
                                    }});
                                    put("non", new PropertyGroupRequest() {{
                                        groupType = GroupTypeEnum.TABULAR;
                                        propertyNames = new String[]{{
                                            add("enim"),
                                            add("sint"),
                                            add("nulla"),
                                            add("deserunt"),
                                        }};
                                    }});
                                    put("esse", new PropertyGroupRequest() {{
                                        groupType = GroupTypeEnum.TABULAR;
                                        propertyNames = new String[]{{
                                            add("reprehenderit"),
                                            add("est"),
                                        }};
                                    }});
                                }};
                            }};, "quis", "sint") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "hic";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdateComponentTypeResponse res = sdk.sdk.updateComponentType(req);

            if (res.updateComponentTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEntity

Updates an entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEntityRequest;
import org.openapis.openapi.models.operations.UpdateEntityRequestBody;
import org.openapis.openapi.models.operations.UpdateEntityRequestBodyParentEntityUpdate;
import org.openapis.openapi.models.operations.UpdateEntityResponse;
import org.openapis.openapi.models.shared.ComponentPropertyGroupRequest;
import org.openapis.openapi.models.shared.ComponentUpdateRequest;
import org.openapis.openapi.models.shared.ComponentUpdateTypeEnum;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.GroupTypeEnum;
import org.openapis.openapi.models.shared.ParentEntityUpdateTypeEnum;
import org.openapis.openapi.models.shared.PropertyDefinitionRequest;
import org.openapis.openapi.models.shared.PropertyGroupUpdateTypeEnum;
import org.openapis.openapi.models.shared.PropertyRequest;
import org.openapis.openapi.models.shared.PropertyUpdateTypeEnum;
import org.openapis.openapi.models.shared.Relationship;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEntityRequest req = new UpdateEntityRequest(                new UpdateEntityRequestBody() {{
                                componentUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentUpdateRequest>() {{
                                    put("quae", new ComponentUpdateRequest() {{
                                        componentTypeId = "minus";
                                        description = "fuga";
                                        propertyGroupUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("consectetur", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("atque"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                            put("impedit", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("soluta"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.CREATE;
                                            }});
                                            put("nam", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("iusto"),
                                                    add("voluptate"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                        }};
                                        propertyUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyRequest>() {{
                                            put("neque", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("deleniti", "quibusdam");
                                                        put("iure", "odit");
                                                        put("voluptatibus", "vel");
                                                        put("magnam", "quibusdam");
                                                    }};
                                                    dataType = new DataType(TypeEnum.LONG_) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 8180.34;
                                                                expression = "libero";
                                                                integerValue = 102413L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 156383L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("aliquam", new DataValue() {{}});
                                                                    put("velit", new DataValue() {{}});
                                                                    put("illo", new DataValue() {{}});
                                                                    put("accusantium", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "vel";
                                                                    targetEntityId = "ea";
                                                                }};
                                                                stringValue = "beatae";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "vero";
                                                            targetComponentTypeId = "excepturi";
                                                        }};
                                                        type = TypeEnum.BOOLEAN_;
                                                        unitOfMeasure = "velit";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 5964.33;
                                                        expression = "earum";
                                                        integerValue = 117525L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 975884L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("itaque", new DataValue() {{}});
                                                            put("alias", new DataValue() {{}});
                                                            put("nisi", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "itaque";
                                                            targetEntityId = "velit";
                                                        }};
                                                        stringValue = "laborum";
                                                    }};
                                                    displayName = "non";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.UPDATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 4833.94;
                                                    expression = "sit";
                                                    integerValue = 39992L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 639705L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("ea", new DataValue() {{}});
                                                        put("quidem", new DataValue() {{}});
                                                        put("voluptas", new DataValue() {{}});
                                                        put("facilis", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "placeat";
                                                        targetEntityId = "perspiciatis";
                                                    }};
                                                    stringValue = "expedita";
                                                }};
                                            }});
                                            put("deleniti", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("voluptate", "ullam");
                                                        put("unde", "necessitatibus");
                                                        put("animi", "impedit");
                                                        put("ipsam", "corporis");
                                                    }};
                                                    dataType = new DataType(TypeEnum.LONG_) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 6216.66;
                                                                expression = "esse";
                                                                integerValue = 288570L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 874400L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("vitae", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "inventore";
                                                                    targetEntityId = "dolorem";
                                                                }};
                                                                stringValue = "ad";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 1830.33;
                                                                expression = "iste";
                                                                integerValue = 403026L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 745233L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("rem", new DataValue() {{}});
                                                                    put("dolorum", new DataValue() {{}});
                                                                    put("odio", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "fugit";
                                                                    targetEntityId = "alias";
                                                                }};
                                                                stringValue = "magni";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 4254.02;
                                                                expression = "quae";
                                                                integerValue = 63553L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 208253L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("itaque", new DataValue() {{}});
                                                                    put("et", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "ipsum";
                                                                    targetEntityId = "unde";
                                                                }};
                                                                stringValue = "nulla";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "distinctio";
                                                            targetComponentTypeId = "maxime";
                                                        }};
                                                        type = TypeEnum.STRING;
                                                        unitOfMeasure = "quia";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 6057.12;
                                                        expression = "libero";
                                                        integerValue = 115661L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 727888L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("officia", new DataValue() {{}});
                                                            put("quos", new DataValue() {{}});
                                                            put("placeat", new DataValue() {{}});
                                                            put("sit", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "iusto";
                                                            targetEntityId = "ipsa";
                                                        }};
                                                        stringValue = "voluptates";
                                                    }};
                                                    displayName = "inventore";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.UPDATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 5171.37;
                                                    expression = "dolore";
                                                    integerValue = 755106L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 32273L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("esse", new DataValue() {{}});
                                                        put("dolores", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "assumenda";
                                                        targetEntityId = "beatae";
                                                    }};
                                                    stringValue = "est";
                                                }};
                                            }});
                                        }};
                                        updateType = ComponentUpdateTypeEnum.DELETE;
                                    }});
                                    put("corrupti", new ComponentUpdateRequest() {{
                                        componentTypeId = "molestiae";
                                        description = "provident";
                                        propertyGroupUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("necessitatibus", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("sint"),
                                                    add("ea"),
                                                    add("autem"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.DELETE;
                                            }});
                                            put("rerum", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("corporis"),
                                                    add("officiis"),
                                                    add("voluptatibus"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.CREATE;
                                            }});
                                            put("at", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("quia"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.CREATE;
                                            }});
                                            put("fuga", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("accusantium"),
                                                    add("expedita"),
                                                    add("officiis"),
                                                    add("eos"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.CREATE;
                                            }});
                                        }};
                                        propertyUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyRequest>() {{
                                            put("praesentium", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("explicabo", "corporis");
                                                    }};
                                                    dataType = new DataType(TypeEnum.DOUBLE) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 9371.17;
                                                                expression = "adipisci";
                                                                integerValue = 923306L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 282837L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("quis", new DataValue() {{}});
                                                                    put("beatae", new DataValue() {{}});
                                                                    put("unde", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "molestiae";
                                                                    targetEntityId = "delectus";
                                                                }};
                                                                stringValue = "cupiditate";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 1478.01;
                                                                expression = "numquam";
                                                                integerValue = 256916L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 873557L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("dignissimos", new DataValue() {{}});
                                                                    put("optio", new DataValue() {{}});
                                                                    put("necessitatibus", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "corporis";
                                                                    targetEntityId = "qui";
                                                                }};
                                                                stringValue = "expedita";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 5326.69;
                                                                expression = "cupiditate";
                                                                integerValue = 326269L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 316542L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("in", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "minus";
                                                                    targetEntityId = "eum";
                                                                }};
                                                                stringValue = "modi";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "corporis";
                                                            targetComponentTypeId = "magnam";
                                                        }};
                                                        type = TypeEnum.MAP;
                                                        unitOfMeasure = "maiores";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 460.13;
                                                        expression = "libero";
                                                        integerValue = 189753L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 520875L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("voluptas", new DataValue() {{}});
                                                            put("quo", new DataValue() {{}});
                                                            put("velit", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "minus";
                                                            targetEntityId = "fuga";
                                                        }};
                                                        stringValue = "nostrum";
                                                    }};
                                                    displayName = "est";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.CREATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 9637.41;
                                                    expression = "tempore";
                                                    integerValue = 878601L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 997437L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("nemo", new DataValue() {{}});
                                                        put("reprehenderit", new DataValue() {{}});
                                                        put("aperiam", new DataValue() {{}});
                                                        put("odio", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "minima";
                                                        targetEntityId = "in";
                                                    }};
                                                    stringValue = "ducimus";
                                                }};
                                            }});
                                            put("excepturi", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("error", "veritatis");
                                                    }};
                                                    dataType = new DataType(TypeEnum.RELATIONSHIP) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 4527.29;
                                                                expression = "pariatur";
                                                                integerValue = 932666L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 763165L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("quaerat", new DataValue() {{}});
                                                                    put("commodi", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "officiis";
                                                                    targetEntityId = "placeat";
                                                                }};
                                                                stringValue = "quidem";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 3481.92;
                                                                expression = "quam";
                                                                integerValue = 211455L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 59383L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("vero", new DataValue() {{}});
                                                                    put("sequi", new DataValue() {{}});
                                                                    put("repudiandae", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "cum";
                                                                    targetEntityId = "dicta";
                                                                }};
                                                                stringValue = "earum";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "veniam";
                                                            targetComponentTypeId = "animi";
                                                        }};
                                                        type = TypeEnum.STRING;
                                                        unitOfMeasure = "nam";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 1644.88;
                                                        expression = "necessitatibus";
                                                        integerValue = 748224L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 497357L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("veritatis", new DataValue() {{}});
                                                            put("quasi", new DataValue() {{}});
                                                            put("laboriosam", new DataValue() {{}});
                                                            put("pariatur", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "libero";
                                                            targetEntityId = "excepturi";
                                                        }};
                                                        stringValue = "occaecati";
                                                    }};
                                                    displayName = "nemo";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.UPDATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3423.42;
                                                    expression = "doloribus";
                                                    integerValue = 757364L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 314573L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("animi", new DataValue() {{}});
                                                        put("quas", new DataValue() {{}});
                                                        put("totam", new DataValue() {{}});
                                                        put("molestias", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "odio";
                                                        targetEntityId = "eaque";
                                                    }};
                                                    stringValue = "saepe";
                                                }};
                                            }});
                                        }};
                                        updateType = ComponentUpdateTypeEnum.CREATE;
                                    }});
                                    put("quos", new ComponentUpdateRequest() {{
                                        componentTypeId = "iste";
                                        description = "assumenda";
                                        propertyGroupUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("libero", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("doloremque"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.CREATE;
                                            }});
                                            put("impedit", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("ipsum"),
                                                    add("adipisci"),
                                                    add("saepe"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.DELETE;
                                            }});
                                            put("doloremque", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("veniam"),
                                                    add("libero"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                        }};
                                        propertyUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyRequest>() {{
                                            put("molestiae", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("possimus", "non");
                                                        put("magnam", "itaque");
                                                        put("sed", "asperiores");
                                                        put("veniam", "consequuntur");
                                                    }};
                                                    dataType = new DataType(TypeEnum.LONG_) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 5129.05;
                                                                expression = "odit";
                                                                integerValue = 863477L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 347698L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("velit", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "facilis";
                                                                    targetEntityId = "tempore";
                                                                }};
                                                                stringValue = "nisi";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 9775.18;
                                                                expression = "quaerat";
                                                                integerValue = 503748L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 392430L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("nisi", new DataValue() {{}});
                                                                    put("libero", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "minus";
                                                                    targetEntityId = "facere";
                                                                }};
                                                                stringValue = "facilis";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2176.63;
                                                                expression = "ad";
                                                                integerValue = 973819L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 162358L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("labore", new DataValue() {{}});
                                                                    put("rerum", new DataValue() {{}});
                                                                    put("eos", new DataValue() {{}});
                                                                    put("reprehenderit", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "nostrum";
                                                                    targetEntityId = "neque";
                                                                }};
                                                                stringValue = "iusto";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 6649.65;
                                                                expression = "rem";
                                                                integerValue = 753890L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 604078L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("ducimus", new DataValue() {{}});
                                                                    put("dolor", new DataValue() {{}});
                                                                    put("dicta", new DataValue() {{}});
                                                                    put("error", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "porro";
                                                                    targetEntityId = "vitae";
                                                                }};
                                                                stringValue = "dignissimos";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "esse";
                                                            targetComponentTypeId = "fugiat";
                                                        }};
                                                        type = TypeEnum.LONG_;
                                                        unitOfMeasure = "aspernatur";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 9650.9;
                                                        expression = "iusto";
                                                        integerValue = 491201L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 72350L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("incidunt", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "accusamus";
                                                            targetEntityId = "saepe";
                                                        }};
                                                        stringValue = "tempore";
                                                    }};
                                                    displayName = "veniam";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.UPDATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 9700.79;
                                                    expression = "earum";
                                                    integerValue = 444121L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 367046L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("quisquam", new DataValue() {{}});
                                                        put("sequi", new DataValue() {{}});
                                                        put("nihil", new DataValue() {{}});
                                                        put("deleniti", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "illo";
                                                        targetEntityId = "labore";
                                                    }};
                                                    stringValue = "assumenda";
                                                }};
                                            }});
                                            put("aliquam", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("provident", "laudantium");
                                                        put("repudiandae", "consequatur");
                                                        put("maxime", "aspernatur");
                                                        put("nam", "expedita");
                                                    }};
                                                    dataType = new DataType(TypeEnum.INTEGER) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 5908.58;
                                                                expression = "repudiandae";
                                                                integerValue = 700045L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 360934L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("similique", new DataValue() {{}});
                                                                    put("repellendus", new DataValue() {{}});
                                                                    put("iure", new DataValue() {{}});
                                                                    put("dolorem", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "commodi";
                                                                    targetEntityId = "impedit";
                                                                }};
                                                                stringValue = "commodi";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 121.71;
                                                                expression = "voluptatem";
                                                                integerValue = 322829L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 229567L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("praesentium", new DataValue() {{}});
                                                                    put("quidem", new DataValue() {{}});
                                                                    put("cum", new DataValue() {{}});
                                                                    put("amet", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "quasi";
                                                                    targetEntityId = "dicta";
                                                                }};
                                                                stringValue = "laudantium";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 407.1;
                                                                expression = "earum";
                                                                integerValue = 479707L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 587967L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("necessitatibus", new DataValue() {{}});
                                                                    put("provident", new DataValue() {{}});
                                                                    put("repudiandae", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "consequatur";
                                                                    targetEntityId = "nemo";
                                                                }};
                                                                stringValue = "molestiae";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "itaque";
                                                            targetComponentTypeId = "facilis";
                                                        }};
                                                        type = TypeEnum.INTEGER;
                                                        unitOfMeasure = "aperiam";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 8795.22;
                                                        expression = "eos";
                                                        integerValue = 520081L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 30661L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("dolor", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "sunt";
                                                            targetEntityId = "a";
                                                        }};
                                                        stringValue = "dolor";
                                                    }};
                                                    displayName = "occaecati";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.DELETE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 1074.72;
                                                    expression = "at";
                                                    integerValue = 287544L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 456704L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("perferendis", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "rerum";
                                                        targetEntityId = "ea";
                                                    }};
                                                    stringValue = "aperiam";
                                                }};
                                            }});
                                            put("dignissimos", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("velit", "porro");
                                                        put("provident", "consectetur");
                                                        put("eligendi", "dignissimos");
                                                        put("consectetur", "soluta");
                                                    }};
                                                    dataType = new DataType(TypeEnum.LONG_) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 8398.07;
                                                                expression = "officia";
                                                                integerValue = 228857L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 133949L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("itaque", new DataValue() {{}});
                                                                    put("illum", new DataValue() {{}});
                                                                    put("laborum", new DataValue() {{}});
                                                                    put("dignissimos", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "vero";
                                                                    targetEntityId = "qui";
                                                                }};
                                                                stringValue = "consectetur";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 9958.16;
                                                                expression = "explicabo";
                                                                integerValue = 129355L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 471457L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("ab", new DataValue() {{}});
                                                                    put("illo", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "hic";
                                                                    targetEntityId = "deserunt";
                                                                }};
                                                                stringValue = "delectus";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2512.12;
                                                                expression = "distinctio";
                                                                integerValue = 450224L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 288300L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("repudiandae", new DataValue() {{}});
                                                                    put("modi", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "in";
                                                                    targetEntityId = "explicabo";
                                                                }};
                                                                stringValue = "accusamus";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "rem";
                                                            targetComponentTypeId = "aperiam";
                                                        }};
                                                        type = TypeEnum.STRING;
                                                        unitOfMeasure = "deleniti";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 4527.3;
                                                        expression = "similique";
                                                        integerValue = 326118L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 300189L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("modi", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "eum";
                                                            targetEntityId = "nesciunt";
                                                        }};
                                                        stringValue = "mollitia";
                                                    }};
                                                    displayName = "dignissimos";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.CREATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 3451.38;
                                                    expression = "molestiae";
                                                    integerValue = 330600L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 66207L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("aut", new DataValue() {{}});
                                                        put("aut", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "eveniet";
                                                        targetEntityId = "odio";
                                                    }};
                                                    stringValue = "commodi";
                                                }};
                                            }});
                                        }};
                                        updateType = ComponentUpdateTypeEnum.CREATE;
                                    }});
                                    put("dolorum", new ComponentUpdateRequest() {{
                                        componentTypeId = "possimus";
                                        description = "voluptate";
                                        propertyGroupUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentPropertyGroupRequest>() {{
                                            put("nesciunt", new ComponentPropertyGroupRequest() {{
                                                groupType = GroupTypeEnum.TABULAR;
                                                propertyNames = new String[]{{
                                                    add("itaque"),
                                                    add("minus"),
                                                }};
                                                updateType = PropertyGroupUpdateTypeEnum.UPDATE;
                                            }});
                                        }};
                                        propertyUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.PropertyRequest>() {{
                                            put("iusto", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("et", "facilis");
                                                        put("amet", "autem");
                                                        put("fuga", "alias");
                                                    }};
                                                    dataType = new DataType(TypeEnum.MAP) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 113.55;
                                                                expression = "quos";
                                                                integerValue = 511222L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 83291L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("eaque", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "saepe";
                                                                    targetEntityId = "delectus";
                                                                }};
                                                                stringValue = "mollitia";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 8590.03;
                                                                expression = "officia";
                                                                integerValue = 152027L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 664L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("hic", new DataValue() {{}});
                                                                    put("voluptatem", new DataValue() {{}});
                                                                    put("incidunt", new DataValue() {{}});
                                                                    put("qui", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "qui";
                                                                    targetEntityId = "necessitatibus";
                                                                }};
                                                                stringValue = "harum";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 1267.27;
                                                                expression = "beatae";
                                                                integerValue = 397988L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 760049L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("molestias", new DataValue() {{}});
                                                                    put("officia", new DataValue() {{}});
                                                                    put("libero", new DataValue() {{}});
                                                                    put("totam", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "sequi";
                                                                    targetEntityId = "aliquid";
                                                                }};
                                                                stringValue = "ea";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "impedit";
                                                            targetComponentTypeId = "ducimus";
                                                        }};
                                                        type = TypeEnum.STRING;
                                                        unitOfMeasure = "velit";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 9979.18;
                                                        expression = "nulla";
                                                        integerValue = 671116L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 883780L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("nisi", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "rerum";
                                                            targetEntityId = "recusandae";
                                                        }};
                                                        stringValue = "voluptates";
                                                    }};
                                                    displayName = "non";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.DELETE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 1578.84;
                                                    expression = "ullam";
                                                    integerValue = 786860L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 973017L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("quae", new DataValue() {{}});
                                                        put("officiis", new DataValue() {{}});
                                                        put("architecto", new DataValue() {{}});
                                                        put("architecto", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "enim";
                                                        targetEntityId = "optio";
                                                    }};
                                                    stringValue = "rem";
                                                }};
                                            }});
                                            put("perferendis", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("reiciendis", "a");
                                                        put("iste", "dicta");
                                                        put("quos", "ullam");
                                                    }};
                                                    dataType = new DataType(TypeEnum.DOUBLE) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2662.84;
                                                                expression = "itaque";
                                                                integerValue = 807419L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 163558L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("vero", new DataValue() {{}});
                                                                    put("doloribus", new DataValue() {{}});
                                                                    put("impedit", new DataValue() {{}});
                                                                    put("porro", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "accusamus";
                                                                    targetEntityId = "totam";
                                                                }};
                                                                stringValue = "reiciendis";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 660.74;
                                                                expression = "sint";
                                                                integerValue = 472414L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 438256L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("nesciunt", new DataValue() {{}});
                                                                    put("debitis", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "vel";
                                                                    targetEntityId = "neque";
                                                                }};
                                                                stringValue = "corporis";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "voluptas";
                                                            targetComponentTypeId = "consequuntur";
                                                        }};
                                                        type = TypeEnum.DOUBLE;
                                                        unitOfMeasure = "reprehenderit";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 2628;
                                                        expression = "ipsa";
                                                        integerValue = 522062L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 35160L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("saepe", new DataValue() {{}});
                                                            put("neque", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "facere";
                                                            targetEntityId = "aliquam";
                                                        }};
                                                        stringValue = "quos";
                                                    }};
                                                    displayName = "doloribus";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.CREATE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 6685.77;
                                                    expression = "delectus";
                                                    integerValue = 245278L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 201096L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("illo", new DataValue() {{}});
                                                        put("repellat", new DataValue() {{}});
                                                        put("nemo", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "doloribus";
                                                        targetEntityId = "possimus";
                                                    }};
                                                    stringValue = "unde";
                                                }};
                                            }});
                                            put("incidunt", new PropertyRequest() {{
                                                definition = new PropertyDefinitionRequest() {{
                                                    configuration = new java.util.HashMap<String, String>() {{
                                                        put("ipsam", "cupiditate");
                                                    }};
                                                    dataType = new DataType(TypeEnum.MAP) {{
                                                        allowedValues = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 20.64;
                                                                expression = "quidem";
                                                                integerValue = 198911L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 956124L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("veniam", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "debitis";
                                                                    targetEntityId = "officia";
                                                                }};
                                                                stringValue = "sint";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2808.59;
                                                                expression = "numquam";
                                                                integerValue = 947822L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 728559L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("minima", new DataValue() {{}});
                                                                    put("ex", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "minus";
                                                                    targetEntityId = "ab";
                                                                }};
                                                                stringValue = "beatae";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 9431.43;
                                                                expression = "nisi";
                                                                integerValue = 786954L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 496548L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("minima", new DataValue() {{}});
                                                                    put("architecto", new DataValue() {{}});
                                                                    put("qui", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "aliquid";
                                                                    targetEntityId = "magni";
                                                                }};
                                                                stringValue = "incidunt";
                                                            }}),
                                                            add(new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2404.9;
                                                                expression = "praesentium";
                                                                integerValue = 220528L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 709701L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("impedit", new DataValue() {{}});
                                                                    put("sit", new DataValue() {{}});
                                                                    put("nemo", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "culpa";
                                                                    targetEntityId = "consequuntur";
                                                                }};
                                                                stringValue = "amet";
                                                            }}),
                                                        }};
                                                        nestedType = new DataType() {{}};
                                                        relationship = new Relationship() {{
                                                            relationshipType = "deserunt";
                                                            targetComponentTypeId = "modi";
                                                        }};
                                                        type = TypeEnum.LONG_;
                                                        unitOfMeasure = "quod";
                                                    }};
                                                    defaultValue = new DataValue() {{
                                                        booleanValue = false;
                                                        doubleValue = 9555.69;
                                                        expression = "quisquam";
                                                        integerValue = 316550L;
                                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                            add(new DataValue() {{}}),
                                                        }};
                                                        longValue = 826806L;
                                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                            put("architecto", new DataValue() {{}});
                                                            put("alias", new DataValue() {{}});
                                                            put("culpa", new DataValue() {{}});
                                                            put("ipsa", new DataValue() {{}});
                                                        }};
                                                        relationshipValue = new RelationshipValue() {{
                                                            targetComponentName = "nobis";
                                                            targetEntityId = "necessitatibus";
                                                        }};
                                                        stringValue = "quia";
                                                    }};
                                                    displayName = "dicta";
                                                    isExternalId = false;
                                                    isRequiredInEntity = false;
                                                    isStoredExternally = false;
                                                    isTimeSeries = false;
                                                }};
                                                updateType = PropertyUpdateTypeEnum.DELETE;
                                                value = new DataValue() {{
                                                    booleanValue = false;
                                                    doubleValue = 5955.84;
                                                    expression = "debitis";
                                                    integerValue = 354821L;
                                                    listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                        add(new DataValue() {{}}),
                                                    }};
                                                    longValue = 33771L;
                                                    mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                        put("veritatis", new DataValue() {{}});
                                                    }};
                                                    relationshipValue = new RelationshipValue() {{
                                                        targetComponentName = "provident";
                                                        targetEntityId = "cumque";
                                                    }};
                                                    stringValue = "iure";
                                                }};
                                            }});
                                        }};
                                        updateType = ComponentUpdateTypeEnum.DELETE;
                                    }});
                                }};
                                description = "quod";
                                entityName = "nemo";
                                parentEntityUpdate = new UpdateEntityRequestBodyParentEntityUpdate() {{
                                    parentEntityId = "recusandae";
                                    updateType = ParentEntityUpdateTypeEnum.UPDATE;
                                }};;
                            }};, "magnam", "dignissimos") {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "odio";
                xAmzDate = "natus";
                xAmzSecurityToken = "provident";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "doloribus";
            }};            

            UpdateEntityResponse res = sdk.sdk.updateEntity(req);

            if (res.updateEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePricingPlan

Update the pricing plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePricingPlanRequest;
import org.openapis.openapi.models.operations.UpdatePricingPlanRequestBody;
import org.openapis.openapi.models.operations.UpdatePricingPlanRequestBodyPricingModeEnum;
import org.openapis.openapi.models.operations.UpdatePricingPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePricingPlanRequest req = new UpdatePricingPlanRequest(                new UpdatePricingPlanRequestBody(UpdatePricingPlanRequestBodyPricingModeEnum.TIERED_BUNDLE) {{
                                bundleNames = new String[]{{
                                    add("laboriosam"),
                                    add("unde"),
                                    add("modi"),
                                    add("perspiciatis"),
                                }};
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "cum";
                xAmzCredential = "aspernatur";
                xAmzDate = "libero";
                xAmzSecurityToken = "nam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "recusandae";
            }};            

            UpdatePricingPlanResponse res = sdk.sdk.updatePricingPlan(req);

            if (res.updatePricingPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScene

Updates a scene.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSceneRequest;
import org.openapis.openapi.models.operations.UpdateSceneRequestBody;
import org.openapis.openapi.models.operations.UpdateSceneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSceneRequest req = new UpdateSceneRequest(                new UpdateSceneRequestBody() {{
                                capabilities = new String[]{{
                                    add("saepe"),
                                    add("autem"),
                                    add("quo"),
                                }};
                                contentLocation = "nesciunt";
                                description = "illum";
                                sceneMetadata = new java.util.HashMap<String, String>() {{
                                    put("illum", "facilis");
                                    put("non", "mollitia");
                                }};
                            }};, "assumenda", "recusandae") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "ad";
                xAmzDate = "facere";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "laborum";
            }};            

            UpdateSceneResponse res = sdk.sdk.updateScene(req);

            if (res.updateSceneResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspace

Updates a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceRequest req = new UpdateWorkspaceRequest(                new UpdateWorkspaceRequestBody() {{
                                description = "maxime";
                                role = "ipsam";
                            }};, "alias") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestias";
                xAmzDate = "laborum";
                xAmzSecurityToken = "est";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateWorkspaceResponse res = sdk.sdk.updateWorkspace(req);

            if (res.updateWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
