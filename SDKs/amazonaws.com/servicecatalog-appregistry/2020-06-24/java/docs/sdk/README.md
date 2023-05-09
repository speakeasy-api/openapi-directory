# SDK

## Overview

 Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicecatalog-appregistry/>
### Available Operations

* [associateAttributeGroup](#associateattributegroup) - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* [associateResource](#associateresource) -  Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 
* [createApplication](#createapplication) - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* [createAttributeGroup](#createattributegroup) - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* [deleteApplication](#deleteapplication) - Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
* [deleteAttributeGroup](#deleteattributegroup) - Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
* [disassociateAttributeGroup](#disassociateattributegroup) - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* [disassociateResource](#disassociateresource) - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* [getApplication](#getapplication) -  Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 
* [getAssociatedResource](#getassociatedresource) - Gets the resource associated with the application.
* [getAttributeGroup](#getattributegroup) -  Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 
* [getConfiguration](#getconfiguration) -  Retrieves a <code>TagKey</code> configuration from an account. 
* [listApplications](#listapplications) - Retrieves a list of all of your applications. Results are paginated.
* [listAssociatedAttributeGroups](#listassociatedattributegroups) - Lists all attribute groups that are associated with specified application. Results are paginated.
* [listAssociatedResources](#listassociatedresources) - <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
* [listAttributeGroups](#listattributegroups) - Lists all attribute groups which you have access to. Results are paginated.
* [listAttributeGroupsForApplication](#listattributegroupsforapplication) - Lists the details of all attribute groups associated with a specific application. The results display in pages.
* [listTagsForResource](#listtagsforresource) - Lists all of the tags on the resource.
* [putConfiguration](#putconfiguration) -  Associates a <code>TagKey</code> configuration to an account. 
* [syncResource](#syncresource) - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* [untagResource](#untagresource) - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* [updateApplication](#updateapplication) - Updates an existing application with new attributes.
* [updateAttributeGroup](#updateattributegroup) - Updates an existing attribute group with new details. 

## associateAttributeGroup

Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAttributeGroupRequest;
import org.openapis.openapi.models.operations.AssociateAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAttributeGroupRequest req = new AssociateAttributeGroupRequest("suscipit", "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateAttributeGroupResponse res = sdk.sdk.associateAttributeGroup(req);

            if (res.associateAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateResource

 Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateResourceRequest;
import org.openapis.openapi.models.operations.AssociateResourceResourceTypeEnum;
import org.openapis.openapi.models.operations.AssociateResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateResourceRequest req = new AssociateResourceRequest("placeat", "voluptatum", AssociateResourceResourceTypeEnum.CFN_STACK) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            AssociateResourceResponse res = sdk.sdk.associateResource(req);

            if (res.associateResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody("perferendis", "ipsam") {{
                                description = "repellendus";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quo", "odit");
                                    put("at", "at");
                                    put("maiores", "molestiae");
                                    put("quod", "quod");
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAttributeGroup

Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAttributeGroupRequest;
import org.openapis.openapi.models.operations.CreateAttributeGroupRequestBody;
import org.openapis.openapi.models.operations.CreateAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAttributeGroupRequest req = new CreateAttributeGroupRequest(                new CreateAttributeGroupRequestBody("fugit", "deleniti", "hic") {{
                                description = "optio";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            CreateAttributeGroupResponse res = sdk.sdk.createAttributeGroup(req);

            if (res.createAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("sed") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAttributeGroup

Deletes an attribute group, specified either by its attribute group ID, name, or ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAttributeGroupRequest;
import org.openapis.openapi.models.operations.DeleteAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAttributeGroupRequest req = new DeleteAttributeGroupRequest("corporis") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeleteAttributeGroupResponse res = sdk.sdk.deleteAttributeGroup(req);

            if (res.deleteAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateAttributeGroup

Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateAttributeGroupRequest;
import org.openapis.openapi.models.operations.DisassociateAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateAttributeGroupRequest req = new DisassociateAttributeGroupRequest("mollitia", "laborum") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            DisassociateAttributeGroupResponse res = sdk.sdk.disassociateAttributeGroup(req);

            if (res.disassociateAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateResource

Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateResourceRequest;
import org.openapis.openapi.models.operations.DisassociateResourceResourceTypeEnum;
import org.openapis.openapi.models.operations.DisassociateResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateResourceRequest req = new DisassociateResourceRequest("minima", "excepturi", DisassociateResourceResourceTypeEnum.CFN_STACK) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            DisassociateResourceResponse res = sdk.sdk.disassociateResource(req);

            if (res.disassociateResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplication

 Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRequest;
import org.openapis.openapi.models.operations.GetApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationRequest req = new GetApplicationRequest("consequuntur") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetApplicationResponse res = sdk.sdk.getApplication(req);

            if (res.getApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociatedResource

Gets the resource associated with the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociatedResourceRequest;
import org.openapis.openapi.models.operations.GetAssociatedResourceResourceTypeEnum;
import org.openapis.openapi.models.operations.GetAssociatedResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssociatedResourceRequest req = new GetAssociatedResourceRequest("error", "quia", GetAssociatedResourceResourceTypeEnum.CFN_STACK) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            GetAssociatedResourceResponse res = sdk.sdk.getAssociatedResource(req);

            if (res.getAssociatedResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttributeGroup

 Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttributeGroupRequest;
import org.openapis.openapi.models.operations.GetAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAttributeGroupRequest req = new GetAttributeGroupRequest("ipsam") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            GetAttributeGroupResponse res = sdk.sdk.getAttributeGroup(req);

            if (res.getAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguration

 Retrieves a <code>TagKey</code> configuration from an account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationRequest;
import org.openapis.openapi.models.operations.GetConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationRequest req = new GetConfigurationRequest() {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetConfigurationResponse res = sdk.sdk.getConfiguration(req);

            if (res.getConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

Retrieves a list of all of your applications. Results are paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest() {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
                maxResults = 120196L;
                nextToken = "corporis";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociatedAttributeGroups

Lists all attribute groups that are associated with specified application. Results are paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociatedAttributeGroupsRequest;
import org.openapis.openapi.models.operations.ListAssociatedAttributeGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociatedAttributeGroupsRequest req = new ListAssociatedAttributeGroupsRequest("iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
                maxResults = 216822L;
                nextToken = "quidem";
            }};            

            ListAssociatedAttributeGroupsResponse res = sdk.sdk.listAssociatedAttributeGroups(req);

            if (res.listAssociatedAttributeGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociatedResources

<p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociatedResourcesRequest;
import org.openapis.openapi.models.operations.ListAssociatedResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociatedResourcesRequest req = new ListAssociatedResourcesRequest("excepturi") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
                maxResults = 575947L;
                nextToken = "veritatis";
            }};            

            ListAssociatedResourcesResponse res = sdk.sdk.listAssociatedResources(req);

            if (res.listAssociatedResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAttributeGroups

Lists all attribute groups which you have access to. Results are paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAttributeGroupsRequest;
import org.openapis.openapi.models.operations.ListAttributeGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttributeGroupsRequest req = new ListAttributeGroupsRequest() {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
                maxResults = 716327L;
                nextToken = "quibusdam";
            }};            

            ListAttributeGroupsResponse res = sdk.sdk.listAttributeGroups(req);

            if (res.listAttributeGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAttributeGroupsForApplication

Lists the details of all attribute groups associated with a specific application. The results display in pages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAttributeGroupsForApplicationRequest;
import org.openapis.openapi.models.operations.ListAttributeGroupsForApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttributeGroupsForApplicationRequest req = new ListAttributeGroupsForApplicationRequest("modi") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
                maxResults = 369808L;
                nextToken = "alias";
            }};            

            ListAttributeGroupsForApplicationResponse res = sdk.sdk.listAttributeGroupsForApplication(req);

            if (res.listAttributeGroupsForApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all of the tags on the resource.

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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dolorum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
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

## putConfiguration

 Associates a <code>TagKey</code> configuration to an account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationRequest;
import org.openapis.openapi.models.operations.PutConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutConfigurationRequestBodyConfiguration;
import org.openapis.openapi.models.operations.PutConfigurationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagQueryConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationRequest req = new PutConfigurationRequest(                new PutConfigurationRequestBody(                new PutConfigurationRequestBodyConfiguration() {{
                                                tagQueryConfiguration = new TagQueryConfiguration() {{
                                                    tagKey = "eligendi";
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            PutConfigurationResponse res = sdk.sdk.putConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## syncResource

<p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SyncResourceRequest;
import org.openapis.openapi.models.operations.SyncResourceResourceTypeEnum;
import org.openapis.openapi.models.operations.SyncResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SyncResourceRequest req = new SyncResourceRequest("a", SyncResourceResourceTypeEnum.RESOURCE_TAG_VALUE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            SyncResourceResponse res = sdk.sdk.syncResource(req);

            if (res.syncResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>

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
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ea", "aliquid");
                                                put("laborum", "accusamus");
                                                put("non", "occaecati");
                                                put("enim", "accusamus");
                                            }});, "delectus") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
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

<p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>

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
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("deserunt",                 new String[]{{
                                add("vel"),
                                add("natus"),
                            }}) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
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

## updateApplication

Updates an existing application with new attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequestBody() {{
                                description = "labore";
                                name = "Ada Rohan";
                            }};, "aspernatur") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAttributeGroup

Updates an existing attribute group with new details. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAttributeGroupRequest;
import org.openapis.openapi.models.operations.UpdateAttributeGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAttributeGroupRequest req = new UpdateAttributeGroupRequest(                new UpdateAttributeGroupRequestBody() {{
                                attributes = "accusantium";
                                description = "mollitia";
                                name = "Shaun Hammes";
                            }};, "necessitatibus") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            UpdateAttributeGroupResponse res = sdk.sdk.updateAttributeGroup(req);

            if (res.updateAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
