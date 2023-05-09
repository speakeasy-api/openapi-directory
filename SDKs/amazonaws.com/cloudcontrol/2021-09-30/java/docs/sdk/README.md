# SDK

## Overview

For more information about Amazon Web Services Cloud Control API, see the <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html">Amazon Web Services Cloud Control API User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudcontrolapi/>
### Available Operations

* [cancelResourceRequest](#cancelresourcerequest) - <p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>Only resource operations requests with a status of <code>PENDING</code> or <code>IN_PROGRESS</code> can be canceled.</p>
* [createResource](#createresource) - <p>Creates the specified resource. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html">Creating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource creation request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> type returned by <code>CreateResource</code>.</p>
* [deleteResource](#deleteresource) - <p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource deletion request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
* [getResource](#getresource) - <p>Returns information about the current state of the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p> <p>You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
* [getResourceRequestStatus](#getresourcerequeststatus) - Returns the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.
* [listResourceRequests](#listresourcerequests) - <p>Returns existing resource operation requests. This includes requests of all status types. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <note> <p>Resource operation requests expire after 7 days.</p> </note>
* [listResources](#listresources) - <p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
* [updateResource](#updateresource) - <p>Updates the specified property values in the resource.</p> <p>You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902"> <i>RFC 6902 - JavaScript Object Notation (JSON) Patch</i> </a> standard.</p> <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource update request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p> <p>For more information about the properties of a specific resource, refer to the related topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>

## cancelResourceRequest

<p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>Only resource operations requests with a status of <code>PENDING</code> or <code>IN_PROGRESS</code> can be canceled.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelResourceRequestRequest;
import org.openapis.openapi.models.operations.CancelResourceRequestResponse;
import org.openapis.openapi.models.operations.CancelResourceRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelResourceRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelResourceRequestRequest req = new CancelResourceRequestRequest(                new CancelResourceRequestInput("deserunt");, CancelResourceRequestXAmzTargetEnum.CLOUD_API_SERVICE_CANCEL_RESOURCE_REQUEST) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelResourceRequestResponse res = sdk.sdk.cancelResourceRequest(req);

            if (res.cancelResourceRequestOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResource

<p>Creates the specified resource. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html">Creating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource creation request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> type returned by <code>CreateResource</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceRequest;
import org.openapis.openapi.models.operations.CreateResourceResponse;
import org.openapis.openapi.models.operations.CreateResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceRequest req = new CreateResourceRequest(                new CreateResourceInput("molestiae", "minus") {{
                                clientToken = "placeat";
                                roleArn = "voluptatum";
                                typeVersionId = "iusto";
                            }};, CreateResourceXAmzTargetEnum.CLOUD_API_SERVICE_CREATE_RESOURCE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            CreateResourceResponse res = sdk.sdk.createResource(req);

            if (res.createResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResource

<p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource deletion request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceRequest;
import org.openapis.openapi.models.operations.DeleteResourceResponse;
import org.openapis.openapi.models.operations.DeleteResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceRequest req = new DeleteResourceRequest(                new DeleteResourceInput("perferendis", "ipsam") {{
                                clientToken = "repellendus";
                                roleArn = "sapiente";
                                typeVersionId = "quo";
                            }};, DeleteResourceXAmzTargetEnum.CLOUD_API_SERVICE_DELETE_RESOURCE) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            DeleteResourceResponse res = sdk.sdk.deleteResource(req);

            if (res.deleteResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResource

<p>Returns information about the current state of the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p> <p>You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceRequest;
import org.openapis.openapi.models.operations.GetResourceResponse;
import org.openapis.openapi.models.operations.GetResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceRequest req = new GetResourceRequest(                new GetResourceInput("totam", "porro") {{
                                roleArn = "dolorum";
                                typeVersionId = "dicta";
                            }};, GetResourceXAmzTargetEnum.CLOUD_API_SERVICE_GET_RESOURCE) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            GetResourceResponse res = sdk.sdk.getResource(req);

            if (res.getResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceRequestStatus

Returns the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceRequestStatusRequest;
import org.openapis.openapi.models.operations.GetResourceRequestStatusResponse;
import org.openapis.openapi.models.operations.GetResourceRequestStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourceRequestStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceRequestStatusRequest req = new GetResourceRequestStatusRequest(                new GetResourceRequestStatusInput("beatae");, GetResourceRequestStatusXAmzTargetEnum.CLOUD_API_SERVICE_GET_RESOURCE_REQUEST_STATUS) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            GetResourceRequestStatusResponse res = sdk.sdk.getResourceRequestStatus(req);

            if (res.getResourceRequestStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceRequests

<p>Returns existing resource operation requests. This includes requests of all status types. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <note> <p>Resource operation requests expire after 7 days.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceRequestsRequest;
import org.openapis.openapi.models.operations.ListResourceRequestsResponse;
import org.openapis.openapi.models.operations.ListResourceRequestsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourceRequestsInput;
import org.openapis.openapi.models.shared.OperationEnum;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.ResourceRequestStatusFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceRequestsRequest req = new ListResourceRequestsRequest(                new ListResourceRequestsInput() {{
                                maxResults = 568434L;
                                nextToken = "aspernatur";
                                resourceRequestStatusFilter = new ResourceRequestStatusFilter() {{
                                    operationStatuses = new org.openapis.openapi.models.shared.OperationStatusEnum[]{{
                                        add(OperationStatusEnum.IN_PROGRESS),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.OperationEnum[]{{
                                        add(OperationEnum.CREATE),
                                        add(OperationEnum.DELETE),
                                        add(OperationEnum.CREATE),
                                    }};
                                }};;
                            }};, ListResourceRequestsXAmzTargetEnum.CLOUD_API_SERVICE_LIST_RESOURCE_REQUESTS) {{
                maxResults = "natus";
                nextToken = "laboriosam";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            ListResourceRequestsResponse res = sdk.sdk.listResourceRequests(req);

            if (res.listResourceRequestsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResources

<p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesRequest;
import org.openapis.openapi.models.operations.ListResourcesResponse;
import org.openapis.openapi.models.operations.ListResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesRequest req = new ListResourcesRequest(                new ListResourcesInput("quidem") {{
                                maxResults = 99280L;
                                nextToken = "ipsa";
                                resourceModel = "reiciendis";
                                roleArn = "est";
                                typeVersionId = "mollitia";
                            }};, ListResourcesXAmzTargetEnum.CLOUD_API_SERVICE_LIST_RESOURCES) {{
                maxResults = "laborum";
                nextToken = "dolores";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            ListResourcesResponse res = sdk.sdk.listResources(req);

            if (res.listResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResource

<p>Updates the specified property values in the resource.</p> <p>You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902"> <i>RFC 6902 - JavaScript Object Notation (JSON) Patch</i> </a> standard.</p> <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource update request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p> <p>For more information about the properties of a specific resource, refer to the related topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceRequest;
import org.openapis.openapi.models.operations.UpdateResourceResponse;
import org.openapis.openapi.models.operations.UpdateResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceRequest req = new UpdateResourceRequest(                new UpdateResourceInput("excepturi", "accusantium", "iure") {{
                                clientToken = "culpa";
                                roleArn = "doloribus";
                                typeVersionId = "sapiente";
                            }};, UpdateResourceXAmzTargetEnum.CLOUD_API_SERVICE_UPDATE_RESOURCE) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            UpdateResourceResponse res = sdk.sdk.updateResource(req);

            if (res.updateResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
