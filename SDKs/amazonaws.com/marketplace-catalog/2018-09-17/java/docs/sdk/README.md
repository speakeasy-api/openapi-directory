# SDK

## Overview

<p>Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace. </p> <p>You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [cancelChangeSet](#cancelchangeset) - Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource-based policy on an Entity that is identified by its resource ARN.
* [describeChangeSet](#describechangeset) - Provides information about a given change set.
* [describeEntity](#describeentity) - Returns the metadata and content of the entity.
* [getResourcePolicy](#getresourcepolicy) - Gets a resource-based policy of an Entity that is identified by its resource ARN.
* [listChangeSets](#listchangesets) - <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
* [listEntities](#listentities) - Provides the list of entities of a given type.
* [listTagsForResource](#listtagsforresource) - Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
* [putResourcePolicy](#putresourcepolicy) - Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.
* [startChangeSet](#startchangeset) - <p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
* [tagResource](#tagresource) - Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
* [untagResource](#untagresource) - Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

## cancelChangeSet

Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelChangeSetRequest;
import org.openapis.openapi.models.operations.CancelChangeSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelChangeSetRequest req = new CancelChangeSetRequest("suscipit", "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CancelChangeSetResponse res = sdk.sdk.cancelChangeSet(req);

            if (res.cancelChangeSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes a resource-based policy on an Entity that is identified by its resource ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest("placeat") {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeChangeSet

Provides information about a given change set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeChangeSetRequest;
import org.openapis.openapi.models.operations.DescribeChangeSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeChangeSetRequest req = new DescribeChangeSetRequest("veritatis", "deserunt") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            DescribeChangeSetResponse res = sdk.sdk.describeChangeSet(req);

            if (res.describeChangeSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEntity

Returns the metadata and content of the entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEntityRequest;
import org.openapis.openapi.models.operations.DescribeEntityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntityRequest req = new DescribeEntityRequest("maiores", "molestiae") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quod";
                xAmzCredential = "esse";
                xAmzDate = "totam";
                xAmzSecurityToken = "porro";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeEntityResponse res = sdk.sdk.describeEntity(req);

            if (res.describeEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicy

Gets a resource-based policy of an Entity that is identified by its resource ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePolicyRequest;
import org.openapis.openapi.models.operations.GetResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePolicyRequest req = new GetResourcePolicyRequest("officia") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            GetResourcePolicyResponse res = sdk.sdk.getResourcePolicy(req);

            if (res.getResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChangeSets

<p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChangeSetsRequest;
import org.openapis.openapi.models.operations.ListChangeSetsRequestBody;
import org.openapis.openapi.models.operations.ListChangeSetsRequestBodySort;
import org.openapis.openapi.models.operations.ListChangeSetsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListChangeSetsRequest req = new ListChangeSetsRequest(                new ListChangeSetsRequestBody("molestiae") {{
                                filterList = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Krista Rippin";
                                        valueList = new String[]{{
                                            add("aspernatur"),
                                            add("perferendis"),
                                            add("ad"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Louis Moore";
                                        valueList = new String[]{{
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                    }}),
                                }};
                                maxResults = 681820L;
                                nextToken = "in";
                                sort = new ListChangeSetsRequestBodySort() {{
                                    sortBy = "corporis";
                                    sortOrder = SortOrderEnum.DESCENDING;
                                }};;
                            }};) {{
                maxResults = "iure";
                nextToken = "saepe";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            ListChangeSetsResponse res = sdk.sdk.listChangeSets(req);

            if (res.listChangeSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntities

Provides the list of entities of a given type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntitiesRequest;
import org.openapis.openapi.models.operations.ListEntitiesRequestBody;
import org.openapis.openapi.models.operations.ListEntitiesRequestBodyOwnershipTypeEnum;
import org.openapis.openapi.models.operations.ListEntitiesRequestBodySort;
import org.openapis.openapi.models.operations.ListEntitiesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntitiesRequest req = new ListEntitiesRequest(                new ListEntitiesRequestBody("dolorem", "corporis") {{
                                filterList = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Ronnie Mohr";
                                        valueList = new String[]{{
                                            add("accusantium"),
                                            add("iure"),
                                            add("culpa"),
                                        }};
                                    }}),
                                }};
                                maxResults = 988374L;
                                nextToken = "sapiente";
                                ownershipType = ListEntitiesRequestBodyOwnershipTypeEnum.SELF;
                                sort = new ListEntitiesRequestBodySort() {{
                                    sortBy = "mollitia";
                                    sortOrder = SortOrderEnum.ASCENDING;
                                }};;
                            }};) {{
                maxResults = "culpa";
                nextToken = "consequuntur";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
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

## listTagsForResource

Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

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
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("error");) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
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

## putResourcePolicy

Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyRequestBody;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequestBody("sequi", "tenetur");) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startChangeSet

<p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartChangeSetRequest;
import org.openapis.openapi.models.operations.StartChangeSetRequestBody;
import org.openapis.openapi.models.operations.StartChangeSetResponse;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartChangeSetRequest req = new StartChangeSetRequest(                new StartChangeSetRequestBody("quasi",                 new org.openapis.openapi.models.shared.Change[]{{
                                                add(new Change("harum", "enim",                 new Entity("accusamus") {{
                                                                    identifier = "commodi";
                                                                }};) {{
                                                    changeName = "voluptatibus";
                                                    changeType = "vero";
                                                    details = "nihil";
                                                    entity = new Entity("ipsa") {{
                                                        identifier = "praesentium";
                                                        type = "voluptatibus";
                                                    }};
                                                    entityTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("perferendis", "doloremque") {{
                                                            key = "voluptate";
                                                            value = "cum";
                                                        }}),
                                                        add(new Tag("maiores", "dicta") {{
                                                            key = "reprehenderit";
                                                            value = "ut";
                                                        }}),
                                                        add(new Tag("iusto", "dicta") {{
                                                            key = "corporis";
                                                            value = "dolore";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Change("distinctio", "quibusdam",                 new Entity("labore") {{
                                                                    identifier = "modi";
                                                                }};) {{
                                                    changeName = "repudiandae";
                                                    changeType = "quae";
                                                    details = "ipsum";
                                                    entity = new Entity("excepturi") {{
                                                        identifier = "quidem";
                                                        type = "molestias";
                                                    }};
                                                    entityTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("rem", "voluptates") {{
                                                            key = "modi";
                                                            value = "praesentium";
                                                        }}),
                                                        add(new Tag("sint", "veritatis") {{
                                                            key = "quasi";
                                                            value = "repudiandae";
                                                        }}),
                                                        add(new Tag("enim", "consequatur") {{
                                                            key = "itaque";
                                                            value = "incidunt";
                                                        }}),
                                                        add(new Tag("explicabo", "deserunt") {{
                                                            key = "est";
                                                            value = "quibusdam";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Change("necessitatibus", "sint",                 new Entity("officia") {{
                                                                    identifier = "dolor";
                                                                }};) {{
                                                    changeName = "qui";
                                                    changeType = "aliquid";
                                                    details = "cupiditate";
                                                    entity = new Entity("magni") {{
                                                        identifier = "quos";
                                                        type = "perferendis";
                                                    }};
                                                    entityTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("fugit", "dolorum") {{
                                                            key = "ipsam";
                                                            value = "alias";
                                                        }}),
                                                        add(new Tag("facilis", "tempore") {{
                                                            key = "excepturi";
                                                            value = "tempora";
                                                        }}),
                                                        add(new Tag("eum", "non") {{
                                                            key = "labore";
                                                            value = "delectus";
                                                        }}),
                                                        add(new Tag("aliquid", "provident") {{
                                                            key = "eligendi";
                                                            value = "sint";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Change("nam", "id",                 new Entity("blanditiis") {{
                                                                    identifier = "deleniti";
                                                                }};) {{
                                                    changeName = "debitis";
                                                    changeType = "a";
                                                    details = "dolorum";
                                                    entity = new Entity("illum") {{
                                                        identifier = "in";
                                                        type = "in";
                                                    }};
                                                    entityTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("magnam", "cumque") {{
                                                            key = "rerum";
                                                            value = "dicta";
                                                        }}),
                                                        add(new Tag("aliquid", "laborum") {{
                                                            key = "facere";
                                                            value = "ea";
                                                        }}),
                                                        add(new Tag("occaecati", "enim") {{
                                                            key = "accusamus";
                                                            value = "non";
                                                        }}),
                                                        add(new Tag("quidem", "provident") {{
                                                            key = "accusamus";
                                                            value = "delectus";
                                                        }}),
                                                    }};
                                                }}),
                                            }}) {{
                                changeSetName = "sapiente";
                                changeSetTags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vel", "natus") {{
                                        key = "deserunt";
                                        value = "nisi";
                                    }}),
                                }};
                                clientRequestToken = "omnis";
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            StartChangeSetResponse res = sdk.sdk.startChangeSet(req);

            if (res.startChangeSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("suscipit",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("vero", "aspernatur") {{
                                                    key = "nobis";
                                                    value = "eum";
                                                }}),
                                                add(new Tag("et", "excepturi") {{
                                                    key = "architecto";
                                                    value = "magnam";
                                                }}),
                                                add(new Tag("quos", "sint") {{
                                                    key = "ullam";
                                                    value = "provident";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
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

Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("odit",                 new String[]{{
                                                add("quasi"),
                                                add("iure"),
                                            }});) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
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
