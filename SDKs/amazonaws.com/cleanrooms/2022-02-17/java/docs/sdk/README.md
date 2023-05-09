# SDK

## Overview

<p>Welcome to the <i>AWS Clean Rooms API Reference</i>.</p> <p>AWS Clean Rooms is an AWS service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can query and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about AWS Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">AWS Clean Rooms User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cleanrooms/>
### Available Operations

* [batchGetSchema](#batchgetschema) - Retrieves multiple schemas by their identifiers.
* [createCollaboration](#createcollaboration) - Creates a new collaboration.
* [createConfiguredTable](#createconfiguredtable) - Creates a new configured table resource.
* [createConfiguredTableAnalysisRule](#createconfiguredtableanalysisrule) - Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
* [createConfiguredTableAssociation](#createconfiguredtableassociation) - Creates a configured table association. A configured table association links a configured table with a collaboration.
* [createMembership](#createmembership) - Creates a membership for a specific collaboration identifier and joins the collaboration.
* [deleteCollaboration](#deletecollaboration) - Deletes a collaboration. It can only be called by the collaboration owner.
* [deleteConfiguredTable](#deleteconfiguredtable) - Deletes a configured table.
* [deleteConfiguredTableAnalysisRule](#deleteconfiguredtableanalysisrule) - Deletes a configured table analysis rule.
* [deleteConfiguredTableAssociation](#deleteconfiguredtableassociation) - Deletes a configured table association.
* [deleteMember](#deletemember) - Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
* [deleteMembership](#deletemembership) - Deletes a specified membership. All resources under a membership must be deleted.
* [getCollaboration](#getcollaboration) - Returns metadata about a collaboration.
* [getConfiguredTable](#getconfiguredtable) - Retrieves a configured table.
* [getConfiguredTableAnalysisRule](#getconfiguredtableanalysisrule) - Retrieves a configured table analysis rule.
* [getConfiguredTableAssociation](#getconfiguredtableassociation) - Retrieves a configured table association.
* [getMembership](#getmembership) - Retrieves a specified membership for an identifier.
* [getProtectedQuery](#getprotectedquery) - Returns query processing metadata.
* [getSchema](#getschema) - Retrieves the schema for a relation within a collaboration.
* [getSchemaAnalysisRule](#getschemaanalysisrule) - Retrieves a schema analysis rule.
* [listCollaborations](#listcollaborations) - Lists collaborations the caller owns, is active in, or has been invited to.
* [listConfiguredTableAssociations](#listconfiguredtableassociations) - Lists configured table associations for a membership.
* [listConfiguredTables](#listconfiguredtables) - Lists configured tables.
* [listMembers](#listmembers) - Lists all members within a collaboration.
* [listMemberships](#listmemberships) - Lists all memberships resources within the caller's account.
* [listProtectedQueries](#listprotectedqueries) - Lists protected queries, sorted by the most recent query.
* [listSchemas](#listschemas) - Lists the schemas for relations within a collaboration.
* [listTagsForResource](#listtagsforresource) - Lists all of the tags that have been added to a resource.
* [startProtectedQuery](#startprotectedquery) - Creates a protected query that is started by AWS Clean Rooms.
* [tagResource](#tagresource) - Tags a resource.
* [untagResource](#untagresource) - Removes a tag or list of tags from a resource.
* [updateCollaboration](#updatecollaboration) - Updates collaboration metadata and can only be called by the collaboration owner.
* [updateConfiguredTable](#updateconfiguredtable) - Updates a configured table.
* [updateConfiguredTableAnalysisRule](#updateconfiguredtableanalysisrule) - Updates a configured table analysis rule.
* [updateConfiguredTableAssociation](#updateconfiguredtableassociation) - Updates a configured table association.
* [updateMembership](#updatemembership) - Updates a membership.
* [updateProtectedQuery](#updateprotectedquery) - Updates the processing of a currently running query.

## batchGetSchema

Retrieves multiple schemas by their identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetSchemaRequest;
import org.openapis.openapi.models.operations.BatchGetSchemaRequestBody;
import org.openapis.openapi.models.operations.BatchGetSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetSchemaRequest req = new BatchGetSchemaRequest(                new BatchGetSchemaRequestBody(                new String[]{{
                                                add("ipsa"),
                                                add("delectus"),
                                                add("tempora"),
                                                add("suscipit"),
                                            }});, "molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            BatchGetSchemaResponse res = sdk.sdk.batchGetSchema(req);

            if (res.batchGetSchemaOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollaboration

Creates a new collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollaborationRequest;
import org.openapis.openapi.models.operations.CreateCollaborationRequestBody;
import org.openapis.openapi.models.operations.CreateCollaborationRequestBodyDataEncryptionMetadata;
import org.openapis.openapi.models.operations.CreateCollaborationRequestBodyQueryLogStatusEnum;
import org.openapis.openapi.models.operations.CreateCollaborationResponse;
import org.openapis.openapi.models.shared.MemberAbilityEnum;
import org.openapis.openapi.models.shared.MemberSpecification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCollaborationRequest req = new CreateCollaborationRequest(                new CreateCollaborationRequestBody("ab",                 new org.openapis.openapi.models.shared.MemberAbilityEnum[]{{
                                                add(MemberAbilityEnum.CAN_QUERY),
                                                add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                            }}, "perferendis",                 new org.openapis.openapi.models.shared.MemberSpecification[]{{
                                                add(new MemberSpecification("molestiae", "quod",                 new org.openapis.openapi.models.shared.MemberAbilityEnum[]{{
                                                                    add(MemberAbilityEnum.CAN_QUERY),
                                                                    add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                                    add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                                    add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                                }}) {{
                                                    accountId = "repellendus";
                                                    displayName = "sapiente";
                                                    memberAbilities = new org.openapis.openapi.models.shared.MemberAbilityEnum[]{{
                                                        add(MemberAbilityEnum.CAN_QUERY),
                                                        add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                        add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                        add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                    }};
                                                }}),
                                                add(new MemberSpecification("hic", "optio",                 new org.openapis.openapi.models.shared.MemberAbilityEnum[]{{
                                                                    add(MemberAbilityEnum.CAN_QUERY),
                                                                    add(MemberAbilityEnum.CAN_QUERY),
                                                                    add(MemberAbilityEnum.CAN_QUERY),
                                                                }}) {{
                                                    accountId = "dicta";
                                                    displayName = "nam";
                                                    memberAbilities = new org.openapis.openapi.models.shared.MemberAbilityEnum[]{{
                                                        add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                        add(MemberAbilityEnum.CAN_QUERY),
                                                        add(MemberAbilityEnum.CAN_RECEIVE_RESULTS),
                                                    }};
                                                }}),
                                            }}, "modi", CreateCollaborationRequestBodyQueryLogStatusEnum.ENABLED) {{
                                dataEncryptionMetadata = new CreateCollaborationRequestBodyDataEncryptionMetadata() {{
                                    allowCleartext = false;
                                    allowDuplicates = false;
                                    allowJoinsOnColumnsWithDifferentNames = false;
                                    preserveNulls = false;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("cum", "esse");
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                    put("ad", "natus");
                                }};
                            }};) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateCollaborationResponse res = sdk.sdk.createCollaboration(req);

            if (res.createCollaborationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfiguredTable

Creates a new configured table resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfiguredTableRequest;
import org.openapis.openapi.models.operations.CreateConfiguredTableRequestBody;
import org.openapis.openapi.models.operations.CreateConfiguredTableRequestBodyAnalysisMethodEnum;
import org.openapis.openapi.models.operations.CreateConfiguredTableRequestBodyTableReference;
import org.openapis.openapi.models.operations.CreateConfiguredTableResponse;
import org.openapis.openapi.models.shared.GlueTableReference;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfiguredTableRequest req = new CreateConfiguredTableRequest(                new CreateConfiguredTableRequestBody(                new String[]{{
                                                add("corporis"),
                                                add("iste"),
                                            }}, CreateConfiguredTableRequestBodyAnalysisMethodEnum.DIRECT_QUERY, "iure",                 new CreateConfiguredTableRequestBodyTableReference() {{
                                                glue = new GlueTableReference("saepe", "quidem");;
                                            }};) {{
                                description = "architecto";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "est");
                                }};
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateConfiguredTableResponse res = sdk.sdk.createConfiguredTable(req);

            if (res.createConfiguredTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfiguredTableAnalysisRule

Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfiguredTableAnalysisRuleRequest;
import org.openapis.openapi.models.operations.CreateConfiguredTableAnalysisRuleRequestBody;
import org.openapis.openapi.models.operations.CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy;
import org.openapis.openapi.models.operations.CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnum;
import org.openapis.openapi.models.operations.CreateConfiguredTableAnalysisRuleResponse;
import org.openapis.openapi.models.shared.AggregateColumn;
import org.openapis.openapi.models.shared.AggregateFunctionNameEnum;
import org.openapis.openapi.models.shared.AggregationConstraint;
import org.openapis.openapi.models.shared.AggregationTypeEnum;
import org.openapis.openapi.models.shared.AnalysisRuleAggregation;
import org.openapis.openapi.models.shared.AnalysisRuleList;
import org.openapis.openapi.models.shared.ConfiguredTableAnalysisRulePolicyV1;
import org.openapis.openapi.models.shared.JoinRequiredOptionEnum;
import org.openapis.openapi.models.shared.ScalarFunctionsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfiguredTableAnalysisRuleRequest req = new CreateConfiguredTableAnalysisRuleRequest(                new CreateConfiguredTableAnalysisRuleRequestBody(                new CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy() {{
                                                v1 = new ConfiguredTableAnalysisRulePolicyV1() {{
                                                    aggregation = new AnalysisRuleAggregation(                new org.openapis.openapi.models.shared.AggregateColumn[]{{
                                                                        add(new AggregateColumn(                new String[]{{
                                                                                            add("culpa"),
                                                                                            add("doloribus"),
                                                                                        }}, AggregateFunctionNameEnum.AVG) {{
                                                                            columnNames = new String[]{{
                                                                                add("minima"),
                                                                                add("excepturi"),
                                                                            }};
                                                                            function = AggregateFunctionNameEnum.SUM;
                                                                        }}),
                                                                        add(new AggregateColumn(                new String[]{{
                                                                                            add("consequuntur"),
                                                                                            add("repellat"),
                                                                                            add("mollitia"),
                                                                                        }}, AggregateFunctionNameEnum.COUNT) {{
                                                                            columnNames = new String[]{{
                                                                                add("mollitia"),
                                                                            }};
                                                                            function = AggregateFunctionNameEnum.SUM_DISTINCT;
                                                                        }}),
                                                                        add(new AggregateColumn(                new String[]{{
                                                                                            add("error"),
                                                                                        }}, AggregateFunctionNameEnum.SUM) {{
                                                                            columnNames = new String[]{{
                                                                                add("commodi"),
                                                                                add("quam"),
                                                                            }};
                                                                            function = AggregateFunctionNameEnum.COUNT;
                                                                        }}),
                                                                    }},                 new String[]{{
                                                                        add("vitae"),
                                                                        add("laborum"),
                                                                    }},                 new String[]{{
                                                                        add("enim"),
                                                                        add("odit"),
                                                                        add("quo"),
                                                                    }},                 new org.openapis.openapi.models.shared.AggregationConstraint[]{{
                                                                        add(new AggregationConstraint("id", 820994L, AggregationTypeEnum.COUNT_DISTINCT) {{
                                                                            columnName = "tenetur";
                                                                            minimum = 368725L;
                                                                            type = AggregationTypeEnum.COUNT_DISTINCT;
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.ScalarFunctionsEnum[]{{
                                                                        add(ScalarFunctionsEnum.ABS),
                                                                    }}) {{
                                                        joinRequired = JoinRequiredOptionEnum.QUERY_RUNNER;
                                                    }};;
                                                    list = new AnalysisRuleList(                new String[]{{
                                                                        add("temporibus"),
                                                                        add("laborum"),
                                                                        add("quasi"),
                                                                    }},                 new String[]{{
                                                                        add("voluptatibus"),
                                                                        add("vero"),
                                                                        add("nihil"),
                                                                        add("praesentium"),
                                                                    }});;
                                                }};;
                                            }};, CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnum.LIST);, "ipsa") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
            }};            

            CreateConfiguredTableAnalysisRuleResponse res = sdk.sdk.createConfiguredTableAnalysisRule(req);

            if (res.createConfiguredTableAnalysisRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfiguredTableAssociation

Creates a configured table association. A configured table association links a configured table with a collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfiguredTableAssociationRequest;
import org.openapis.openapi.models.operations.CreateConfiguredTableAssociationRequestBody;
import org.openapis.openapi.models.operations.CreateConfiguredTableAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfiguredTableAssociationRequest req = new CreateConfiguredTableAssociationRequest(                new CreateConfiguredTableAssociationRequestBody("dicta", "corporis", "dolore") {{
                                description = "iusto";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("harum", "enim");
                                }};
                            }};, "accusamus") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateConfiguredTableAssociationResponse res = sdk.sdk.createConfiguredTableAssociation(req);

            if (res.createConfiguredTableAssociationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMembership

Creates a membership for a specific collaboration identifier and joins the collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMembershipRequest;
import org.openapis.openapi.models.operations.CreateMembershipRequestBody;
import org.openapis.openapi.models.operations.CreateMembershipRequestBodyQueryLogStatusEnum;
import org.openapis.openapi.models.operations.CreateMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMembershipRequest req = new CreateMembershipRequest(                new CreateMembershipRequestBody("modi", CreateMembershipRequestBodyQueryLogStatusEnum.DISABLED) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("voluptates", "quasi");
                                    put("repudiandae", "sint");
                                    put("veritatis", "itaque");
                                }};
                            }};) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateMembershipResponse res = sdk.sdk.createMembership(req);

            if (res.createMembershipOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCollaboration

Deletes a collaboration. It can only be called by the collaboration owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCollaborationRequest;
import org.openapis.openapi.models.operations.DeleteCollaborationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCollaborationRequest req = new DeleteCollaborationRequest("quibusdam") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteCollaborationResponse res = sdk.sdk.deleteCollaboration(req);

            if (res.deleteCollaborationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfiguredTable

Deletes a configured table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfiguredTableRequest;
import org.openapis.openapi.models.operations.DeleteConfiguredTableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfiguredTableRequest req = new DeleteConfiguredTableRequest("assumenda") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
            }};            

            DeleteConfiguredTableResponse res = sdk.sdk.deleteConfiguredTable(req);

            if (res.deleteConfiguredTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfiguredTableAnalysisRule

Deletes a configured table analysis rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;
import org.openapis.openapi.models.operations.DeleteConfiguredTableAnalysisRuleRequest;
import org.openapis.openapi.models.operations.DeleteConfiguredTableAnalysisRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfiguredTableAnalysisRuleRequest req = new DeleteConfiguredTableAnalysisRuleRequest(DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnum.AGGREGATION, "delectus") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteConfiguredTableAnalysisRuleResponse res = sdk.sdk.deleteConfiguredTableAnalysisRule(req);

            if (res.deleteConfiguredTableAnalysisRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfiguredTableAssociation

Deletes a configured table association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfiguredTableAssociationRequest;
import org.openapis.openapi.models.operations.DeleteConfiguredTableAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfiguredTableAssociationRequest req = new DeleteConfiguredTableAssociationRequest("officia", "dolor") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteConfiguredTableAssociationResponse res = sdk.sdk.deleteConfiguredTableAssociation(req);

            if (res.deleteConfiguredTableAssociationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMember

Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMemberRequest;
import org.openapis.openapi.models.operations.DeleteMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMemberRequest req = new DeleteMemberRequest("dicta", "magnam") {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            DeleteMemberResponse res = sdk.sdk.deleteMember(req);

            if (res.deleteMemberOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMembership

Deletes a specified membership. All resources under a membership must be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMembershipRequest;
import org.openapis.openapi.models.operations.DeleteMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMembershipRequest req = new DeleteMembershipRequest("enim") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quidem";
                xAmzDate = "provident";
                xAmzSecurityToken = "nam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "blanditiis";
            }};            

            DeleteMembershipResponse res = sdk.sdk.deleteMembership(req);

            if (res.deleteMembershipOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCollaboration

Returns metadata about a collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCollaborationRequest;
import org.openapis.openapi.models.operations.GetCollaborationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCollaborationRequest req = new GetCollaborationRequest("sapiente") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetCollaborationResponse res = sdk.sdk.getCollaboration(req);

            if (res.getCollaborationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguredTable

Retrieves a configured table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfiguredTableRequest;
import org.openapis.openapi.models.operations.GetConfiguredTableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfiguredTableRequest req = new GetConfiguredTableRequest("nihil") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            GetConfiguredTableResponse res = sdk.sdk.getConfiguredTable(req);

            if (res.getConfiguredTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguredTableAnalysisRule

Retrieves a configured table analysis rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;
import org.openapis.openapi.models.operations.GetConfiguredTableAnalysisRuleRequest;
import org.openapis.openapi.models.operations.GetConfiguredTableAnalysisRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfiguredTableAnalysisRuleRequest req = new GetConfiguredTableAnalysisRuleRequest(GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum.AGGREGATION, "vero") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            GetConfiguredTableAnalysisRuleResponse res = sdk.sdk.getConfiguredTableAnalysisRule(req);

            if (res.getConfiguredTableAnalysisRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguredTableAssociation

Retrieves a configured table association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfiguredTableAssociationRequest;
import org.openapis.openapi.models.operations.GetConfiguredTableAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfiguredTableAssociationRequest req = new GetConfiguredTableAssociationRequest("sint", "accusantium") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetConfiguredTableAssociationResponse res = sdk.sdk.getConfiguredTableAssociation(req);

            if (res.getConfiguredTableAssociationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMembership

Retrieves a specified membership for an identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMembershipRequest;
import org.openapis.openapi.models.operations.GetMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMembershipRequest req = new GetMembershipRequest("nemo") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetMembershipResponse res = sdk.sdk.getMembership(req);

            if (res.getMembershipOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProtectedQuery

Returns query processing metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProtectedQueryRequest;
import org.openapis.openapi.models.operations.GetProtectedQueryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProtectedQueryRequest req = new GetProtectedQueryRequest("in", "architecto") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GetProtectedQueryResponse res = sdk.sdk.getProtectedQuery(req);

            if (res.getProtectedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchema

Retrieves the schema for a relation within a collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaRequest;
import org.openapis.openapi.models.operations.GetSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchemaRequest req = new GetSchemaRequest("saepe", "pariatur") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            GetSchemaResponse res = sdk.sdk.getSchema(req);

            if (res.getSchemaOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchemaAnalysisRule

Retrieves a schema analysis rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaAnalysisRuleRequest;
import org.openapis.openapi.models.operations.GetSchemaAnalysisRuleResponse;
import org.openapis.openapi.models.operations.GetSchemaAnalysisRuleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchemaAnalysisRuleRequest req = new GetSchemaAnalysisRuleRequest("pariatur", "maxime", GetSchemaAnalysisRuleTypeEnum.AGGREGATION) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "odit";
                xAmzCredential = "ea";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "ab";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quidem";
            }};            

            GetSchemaAnalysisRuleResponse res = sdk.sdk.getSchemaAnalysisRule(req);

            if (res.getSchemaAnalysisRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCollaborations

Lists collaborations the caller owns, is active in, or has been invited to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCollaborationsMemberStatusEnum;
import org.openapis.openapi.models.operations.ListCollaborationsRequest;
import org.openapis.openapi.models.operations.ListCollaborationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCollaborationsRequest req = new ListCollaborationsRequest() {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = 16627L;
                memberStatus = ListCollaborationsMemberStatusEnum.ACTIVE;
                nextToken = "amet";
            }};            

            ListCollaborationsResponse res = sdk.sdk.listCollaborations(req);

            if (res.listCollaborationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfiguredTableAssociations

Lists configured table associations for a membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfiguredTableAssociationsRequest;
import org.openapis.openapi.models.operations.ListConfiguredTableAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfiguredTableAssociationsRequest req = new ListConfiguredTableAssociationsRequest("cumque") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "hic";
                xAmzCredential = "libero";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "totam";
                maxResults = 489549L;
                nextToken = "eaque";
            }};            

            ListConfiguredTableAssociationsResponse res = sdk.sdk.listConfiguredTableAssociations(req);

            if (res.listConfiguredTableAssociationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfiguredTables

Lists configured tables.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfiguredTablesRequest;
import org.openapis.openapi.models.operations.ListConfiguredTablesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfiguredTablesRequest req = new ListConfiguredTablesRequest() {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
                maxResults = 874573L;
                nextToken = "nostrum";
            }};            

            ListConfiguredTablesResponse res = sdk.sdk.listConfiguredTables(req);

            if (res.listConfiguredTablesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMembers

Lists all members within a collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMembersRequest;
import org.openapis.openapi.models.operations.ListMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMembersRequest req = new ListMembersRequest("recusandae") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
                maxResults = 621479L;
                nextToken = "eaque";
            }};            

            ListMembersResponse res = sdk.sdk.listMembers(req);

            if (res.listMembersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMemberships

Lists all memberships resources within the caller's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMembershipsRequest;
import org.openapis.openapi.models.operations.ListMembershipsResponse;
import org.openapis.openapi.models.operations.ListMembershipsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMembershipsRequest req = new ListMembershipsRequest() {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
                maxResults = 535633L;
                nextToken = "pariatur";
                status = ListMembershipsStatusEnum.REMOVED;
            }};            

            ListMembershipsResponse res = sdk.sdk.listMemberships(req);

            if (res.listMembershipsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProtectedQueries

Lists protected queries, sorted by the most recent query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProtectedQueriesRequest;
import org.openapis.openapi.models.operations.ListProtectedQueriesResponse;
import org.openapis.openapi.models.operations.ListProtectedQueriesStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProtectedQueriesRequest req = new ListProtectedQueriesRequest("libero") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
                maxResults = 186193L;
                nextToken = "ipsum";
                status = ListProtectedQueriesStatusEnum.TIMED_OUT;
            }};            

            ListProtectedQueriesResponse res = sdk.sdk.listProtectedQueries(req);

            if (res.listProtectedQueriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSchemas

Lists the schemas for relations within a collaboration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSchemasRequest;
import org.openapis.openapi.models.operations.ListSchemasResponse;
import org.openapis.openapi.models.operations.ListSchemasSchemaTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSchemasRequest req = new ListSchemasRequest("cum") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
                maxResults = 58029L;
                nextToken = "ipsa";
                schemaType = ListSchemasSchemaTypeEnum.TABLE;
            }};            

            ListSchemasResponse res = sdk.sdk.listSchemas(req);

            if (res.listSchemasOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all of the tags that have been added to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("odio") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startProtectedQuery

Creates a protected query that is started by AWS Clean Rooms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartProtectedQueryRequest;
import org.openapis.openapi.models.operations.StartProtectedQueryRequestBody;
import org.openapis.openapi.models.operations.StartProtectedQueryRequestBodyResultConfiguration;
import org.openapis.openapi.models.operations.StartProtectedQueryRequestBodySqlParameters;
import org.openapis.openapi.models.operations.StartProtectedQueryRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.StartProtectedQueryResponse;
import org.openapis.openapi.models.shared.ProtectedQueryOutputConfiguration;
import org.openapis.openapi.models.shared.ProtectedQueryS3OutputConfiguration;
import org.openapis.openapi.models.shared.ResultFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartProtectedQueryRequest req = new StartProtectedQueryRequest(                new StartProtectedQueryRequestBody(                new StartProtectedQueryRequestBodyResultConfiguration() {{
                                                outputConfiguration = new ProtectedQueryOutputConfiguration() {{
                                                    s3 = new ProtectedQueryS3OutputConfiguration("sit", ResultFormatEnum.PARQUET) {{
                                                        keyPrefix = "ab";
                                                    }};;
                                                }};;
                                            }};,                 new StartProtectedQueryRequestBodySqlParameters() {{
                                                queryString = "soluta";
                                            }};, StartProtectedQueryRequestBodyTypeEnum.SQL);, "dolorum") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            StartProtectedQueryResponse res = sdk.sdk.startProtectedQuery(req);

            if (res.startProtectedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags a resource.

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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ipsum", "voluptate");
                                                put("id", "saepe");
                                            }});, "eius") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag or list of tags from a resource.

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
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("deserunt",                 new String[]{{
                                add("minima"),
                                add("repellendus"),
                                add("totam"),
                            }}) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCollaboration

Updates collaboration metadata and can only be called by the collaboration owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCollaborationRequest;
import org.openapis.openapi.models.operations.UpdateCollaborationRequestBody;
import org.openapis.openapi.models.operations.UpdateCollaborationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCollaborationRequest req = new UpdateCollaborationRequest(                new UpdateCollaborationRequestBody() {{
                                description = "qui";
                                name = "Randal Klocko";
                            }};, "ipsum") {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            UpdateCollaborationResponse res = sdk.sdk.updateCollaboration(req);

            if (res.updateCollaborationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfiguredTable

Updates a configured table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfiguredTableRequest;
import org.openapis.openapi.models.operations.UpdateConfiguredTableRequestBody;
import org.openapis.openapi.models.operations.UpdateConfiguredTableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConfiguredTableRequest req = new UpdateConfiguredTableRequest(                new UpdateConfiguredTableRequestBody() {{
                                description = "sapiente";
                                name = "Christian Balistreri";
                            }};, "sed") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "libero";
                xAmzCredential = "voluptas";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "quam";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "incidunt";
            }};            

            UpdateConfiguredTableResponse res = sdk.sdk.updateConfiguredTable(req);

            if (res.updateConfiguredTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfiguredTableAnalysisRule

Updates a configured table analysis rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAnalysisRuleRequest;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAnalysisRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAnalysisRuleResponse;
import org.openapis.openapi.models.shared.AggregateColumn;
import org.openapis.openapi.models.shared.AggregateFunctionNameEnum;
import org.openapis.openapi.models.shared.AggregationConstraint;
import org.openapis.openapi.models.shared.AggregationTypeEnum;
import org.openapis.openapi.models.shared.AnalysisRuleAggregation;
import org.openapis.openapi.models.shared.AnalysisRuleList;
import org.openapis.openapi.models.shared.ConfiguredTableAnalysisRulePolicyV1;
import org.openapis.openapi.models.shared.JoinRequiredOptionEnum;
import org.openapis.openapi.models.shared.ScalarFunctionsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConfiguredTableAnalysisRuleRequest req = new UpdateConfiguredTableAnalysisRuleRequest(                new UpdateConfiguredTableAnalysisRuleRequestBody(                new UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy() {{
                                                v1 = new ConfiguredTableAnalysisRulePolicyV1() {{
                                                    aggregation = new AnalysisRuleAggregation(                new org.openapis.openapi.models.shared.AggregateColumn[]{{
                                                                        add(new AggregateColumn(                new String[]{{
                                                                                            add("aspernatur"),
                                                                                            add("dolores"),
                                                                                        }}, AggregateFunctionNameEnum.COUNT_DISTINCT) {{
                                                                            columnNames = new String[]{{
                                                                                add("pariatur"),
                                                                                add("soluta"),
                                                                                add("dicta"),
                                                                                add("laborum"),
                                                                            }};
                                                                            function = AggregateFunctionNameEnum.COUNT;
                                                                        }}),
                                                                        add(new AggregateColumn(                new String[]{{
                                                                                            add("neque"),
                                                                                        }}, AggregateFunctionNameEnum.SUM) {{
                                                                            columnNames = new String[]{{
                                                                                add("aliquid"),
                                                                                add("quam"),
                                                                                add("molestias"),
                                                                            }};
                                                                            function = AggregateFunctionNameEnum.AVG;
                                                                        }}),
                                                                        add(new AggregateColumn(                new String[]{{
                                                                                            add("nam"),
                                                                                            add("hic"),
                                                                                        }}, AggregateFunctionNameEnum.SUM) {{
                                                                            columnNames = new String[]{{
                                                                                add("odio"),
                                                                            }};
                                                                            function = AggregateFunctionNameEnum.SUM;
                                                                        }}),
                                                                    }},                 new String[]{{
                                                                        add("soluta"),
                                                                        add("nobis"),
                                                                        add("et"),
                                                                        add("saepe"),
                                                                    }},                 new String[]{{
                                                                        add("veritatis"),
                                                                    }},                 new org.openapis.openapi.models.shared.AggregationConstraint[]{{
                                                                        add(new AggregationConstraint("cupiditate", 45614L, AggregationTypeEnum.COUNT_DISTINCT) {{
                                                                            columnName = "quos";
                                                                            minimum = 731694L;
                                                                            type = AggregationTypeEnum.COUNT_DISTINCT;
                                                                        }}),
                                                                        add(new AggregationConstraint("dolore", 286915L, AggregationTypeEnum.COUNT_DISTINCT) {{
                                                                            columnName = "delectus";
                                                                            minimum = 209157L;
                                                                            type = AggregationTypeEnum.COUNT_DISTINCT;
                                                                        }}),
                                                                        add(new AggregationConstraint("architecto", 63038L, AggregationTypeEnum.COUNT_DISTINCT) {{
                                                                            columnName = "adipisci";
                                                                            minimum = 677263L;
                                                                            type = AggregationTypeEnum.COUNT_DISTINCT;
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.ScalarFunctionsEnum[]{{
                                                                        add(ScalarFunctionsEnum.SQRT),
                                                                    }}) {{
                                                        joinRequired = JoinRequiredOptionEnum.QUERY_RUNNER;
                                                    }};;
                                                    list = new AnalysisRuleList(                new String[]{{
                                                                        add("consequatur"),
                                                                        add("est"),
                                                                        add("repellendus"),
                                                                        add("porro"),
                                                                    }},                 new String[]{{
                                                                        add("ut"),
                                                                        add("facilis"),
                                                                        add("cupiditate"),
                                                                        add("qui"),
                                                                    }});;
                                                }};;
                                            }};);, UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnum.AGGREGATION, "laudantium") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            UpdateConfiguredTableAnalysisRuleResponse res = sdk.sdk.updateConfiguredTableAnalysisRule(req);

            if (res.updateConfiguredTableAnalysisRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfiguredTableAssociation

Updates a configured table association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAssociationRequest;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAssociationRequestBody;
import org.openapis.openapi.models.operations.UpdateConfiguredTableAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConfiguredTableAssociationRequest req = new UpdateConfiguredTableAssociationRequest(                new UpdateConfiguredTableAssociationRequestBody() {{
                                description = "delectus";
                                roleArn = "voluptate";
                            }};, "consectetur", "vero") {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            UpdateConfiguredTableAssociationResponse res = sdk.sdk.updateConfiguredTableAssociation(req);

            if (res.updateConfiguredTableAssociationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMembership

Updates a membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMembershipRequest;
import org.openapis.openapi.models.operations.UpdateMembershipRequestBody;
import org.openapis.openapi.models.operations.UpdateMembershipRequestBodyQueryLogStatusEnum;
import org.openapis.openapi.models.operations.UpdateMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMembershipRequest req = new UpdateMembershipRequest(                new UpdateMembershipRequestBody() {{
                                queryLogStatus = UpdateMembershipRequestBodyQueryLogStatusEnum.DISABLED;
                            }};, "ducimus") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "illum";
                xAmzDate = "sequi";
                xAmzSecurityToken = "natus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aut";
            }};            

            UpdateMembershipResponse res = sdk.sdk.updateMembership(req);

            if (res.updateMembershipOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProtectedQuery

Updates the processing of a currently running query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProtectedQueryRequest;
import org.openapis.openapi.models.operations.UpdateProtectedQueryRequestBody;
import org.openapis.openapi.models.operations.UpdateProtectedQueryRequestBodyTargetStatusEnum;
import org.openapis.openapi.models.operations.UpdateProtectedQueryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProtectedQueryRequest req = new UpdateProtectedQueryRequest(                new UpdateProtectedQueryRequestBody(UpdateProtectedQueryRequestBodyTargetStatusEnum.CANCELLED);, "exercitationem", "nulla") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
            }};            

            UpdateProtectedQueryResponse res = sdk.sdk.updateProtectedQuery(req);

            if (res.updateProtectedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
