# SDK

## Overview

With Service Quotas, you can view and manage your quotas easily as your AWS workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicequotas/>
### Available Operations

* [associateServiceQuotaTemplate](#associateservicequotatemplate) - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* [deleteServiceQuotaIncreaseRequestFromTemplate](#deleteservicequotaincreaserequestfromtemplate) - Deletes the quota increase request for the specified quota from your quota request template.
* [disassociateServiceQuotaTemplate](#disassociateservicequotatemplate) - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* [getAWSDefaultServiceQuota](#getawsdefaultservicequota) - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* [getAssociationForServiceQuotaTemplate](#getassociationforservicequotatemplate) - Retrieves the status of the association for the quota request template.
* [getRequestedServiceQuotaChange](#getrequestedservicequotachange) - Retrieves information about the specified quota increase request.
* [getServiceQuota](#getservicequota) - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [getServiceQuotaIncreaseRequestFromTemplate](#getservicequotaincreaserequestfromtemplate) - Retrieves information about the specified quota increase request in your quota request template.
* [listAWSDefaultServiceQuotas](#listawsdefaultservicequotas) - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* [listRequestedServiceQuotaChangeHistory](#listrequestedservicequotachangehistory) - Retrieves the quota increase requests for the specified service.
* [listRequestedServiceQuotaChangeHistoryByQuota](#listrequestedservicequotachangehistorybyquota) - Retrieves the quota increase requests for the specified quota.
* [listServiceQuotaIncreaseRequestsInTemplate](#listservicequotaincreaserequestsintemplate) - Lists the quota increase requests in the specified quota request template.
* [listServiceQuotas](#listservicequotas) - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [listServices](#listservices) - Lists the names and codes for the services integrated with Service Quotas.
* [listTagsForResource](#listtagsforresource) - Returns a list of the tags assigned to the specified applied quota.
* [putServiceQuotaIncreaseRequestIntoTemplate](#putservicequotaincreaserequestintotemplate) - Adds a quota increase request to your quota request template.
* [requestServiceQuotaIncrease](#requestservicequotaincrease) - Submits a quota increase request for the specified quota.
* [tagResource](#tagresource) - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* [untagResource](#untagresource) - Removes tags from the specified applied quota. You can specify one or more tags to remove.

## associateServiceQuotaTemplate

Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateRequest;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateResponse;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceQuotaTemplateRequest req = new AssociateServiceQuotaTemplateRequest(                new java.util.HashMap<String, Object>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }}, AssociateServiceQuotaTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_ASSOCIATE_SERVICE_QUOTA_TEMPLATE) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateServiceQuotaTemplateResponse res = sdk.sdk.associateServiceQuotaTemplate(req);

            if (res.associateServiceQuotaTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceQuotaIncreaseRequestFromTemplate

Deletes the quota increase request for the specified quota from your quota request template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
import org.openapis.openapi.models.operations.DeleteServiceQuotaIncreaseRequestFromTemplateResponse;
import org.openapis.openapi.models.operations.DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceQuotaIncreaseRequestFromTemplateRequest req = new DeleteServiceQuotaIncreaseRequestFromTemplateRequest(                new DeleteServiceQuotaIncreaseRequestFromTemplateRequest("ipsam", "repellendus", "sapiente");, DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_DELETE_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            DeleteServiceQuotaIncreaseRequestFromTemplateResponse res = sdk.sdk.deleteServiceQuotaIncreaseRequestFromTemplate(req);

            if (res.deleteServiceQuotaIncreaseRequestFromTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateServiceQuotaTemplate

Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateServiceQuotaTemplateRequest;
import org.openapis.openapi.models.operations.DisassociateServiceQuotaTemplateResponse;
import org.openapis.openapi.models.operations.DisassociateServiceQuotaTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateServiceQuotaTemplateRequest req = new DisassociateServiceQuotaTemplateRequest(                new java.util.HashMap<String, Object>() {{
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }}, DisassociateServiceQuotaTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_DISASSOCIATE_SERVICE_QUOTA_TEMPLATE) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            DisassociateServiceQuotaTemplateResponse res = sdk.sdk.disassociateServiceQuotaTemplate(req);

            if (res.disassociateServiceQuotaTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAWSDefaultServiceQuota

Retrieves the default value for the specified quota. The default value does not reflect any quota increases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAWSDefaultServiceQuotaRequest;
import org.openapis.openapi.models.operations.GetAWSDefaultServiceQuotaResponse;
import org.openapis.openapi.models.operations.GetAWSDefaultServiceQuotaXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAWSDefaultServiceQuotaRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAWSDefaultServiceQuotaRequest req = new GetAWSDefaultServiceQuotaRequest(                new GetAWSDefaultServiceQuotaRequest("beatae", "commodi");, GetAWSDefaultServiceQuotaXAmzTargetEnum.SERVICE_QUOTAS_V20190624_GET_AWS_DEFAULT_SERVICE_QUOTA) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            GetAWSDefaultServiceQuotaResponse res = sdk.sdk.getAWSDefaultServiceQuota(req);

            if (res.getAWSDefaultServiceQuotaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationForServiceQuotaTemplate

Retrieves the status of the association for the quota request template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationForServiceQuotaTemplateRequest;
import org.openapis.openapi.models.operations.GetAssociationForServiceQuotaTemplateResponse;
import org.openapis.openapi.models.operations.GetAssociationForServiceQuotaTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssociationForServiceQuotaTemplateRequest req = new GetAssociationForServiceQuotaTemplateRequest(                new java.util.HashMap<String, Object>() {{
                                put("perferendis", "ad");
                            }}, GetAssociationForServiceQuotaTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_GET_ASSOCIATION_FOR_SERVICE_QUOTA_TEMPLATE) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GetAssociationForServiceQuotaTemplateResponse res = sdk.sdk.getAssociationForServiceQuotaTemplate(req);

            if (res.getAssociationForServiceQuotaTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRequestedServiceQuotaChange

Retrieves information about the specified quota increase request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequestedServiceQuotaChangeRequest;
import org.openapis.openapi.models.operations.GetRequestedServiceQuotaChangeResponse;
import org.openapis.openapi.models.operations.GetRequestedServiceQuotaChangeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRequestedServiceQuotaChangeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRequestedServiceQuotaChangeRequest req = new GetRequestedServiceQuotaChangeRequest(                new GetRequestedServiceQuotaChangeRequest("fuga");, GetRequestedServiceQuotaChangeXAmzTargetEnum.SERVICE_QUOTAS_V20190624_GET_REQUESTED_SERVICE_QUOTA_CHANGE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            GetRequestedServiceQuotaChangeResponse res = sdk.sdk.getRequestedServiceQuotaChange(req);

            if (res.getRequestedServiceQuotaChangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceQuota

Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceQuotaRequest;
import org.openapis.openapi.models.operations.GetServiceQuotaResponse;
import org.openapis.openapi.models.operations.GetServiceQuotaXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceQuotaRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceQuotaRequest req = new GetServiceQuotaRequest(                new GetServiceQuotaRequest("reiciendis", "est");, GetServiceQuotaXAmzTargetEnum.SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            GetServiceQuotaResponse res = sdk.sdk.getServiceQuota(req);

            if (res.getServiceQuotaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceQuotaIncreaseRequestFromTemplate

Retrieves information about the specified quota increase request in your quota request template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceQuotaIncreaseRequestFromTemplateRequest;
import org.openapis.openapi.models.operations.GetServiceQuotaIncreaseRequestFromTemplateResponse;
import org.openapis.openapi.models.operations.GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceQuotaIncreaseRequestFromTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceQuotaIncreaseRequestFromTemplateRequest req = new GetServiceQuotaIncreaseRequestFromTemplateRequest(                new GetServiceQuotaIncreaseRequestFromTemplateRequest("omnis", "nemo", "minima");, GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            GetServiceQuotaIncreaseRequestFromTemplateResponse res = sdk.sdk.getServiceQuotaIncreaseRequestFromTemplate(req);

            if (res.getServiceQuotaIncreaseRequestFromTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAWSDefaultServiceQuotas

Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAWSDefaultServiceQuotasRequest;
import org.openapis.openapi.models.operations.ListAWSDefaultServiceQuotasResponse;
import org.openapis.openapi.models.operations.ListAWSDefaultServiceQuotasXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAWSDefaultServiceQuotasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAWSDefaultServiceQuotasRequest req = new ListAWSDefaultServiceQuotasRequest(                new ListAWSDefaultServiceQuotasRequest("dolorem") {{
                                maxResults = 635059L;
                                nextToken = "consequuntur";
                            }};, ListAWSDefaultServiceQuotasXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_AWS_DEFAULT_SERVICE_QUOTAS) {{
                maxResults = "repellat";
                nextToken = "mollitia";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            ListAWSDefaultServiceQuotasResponse res = sdk.sdk.listAWSDefaultServiceQuotas(req);

            if (res.listAWSDefaultServiceQuotasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRequestedServiceQuotaChangeHistory

Retrieves the quota increase requests for the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRequestedServiceQuotaChangeHistoryRequest;
import org.openapis.openapi.models.operations.ListRequestedServiceQuotaChangeHistoryResponse;
import org.openapis.openapi.models.operations.ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRequestedServiceQuotaChangeHistoryRequest;
import org.openapis.openapi.models.shared.RequestStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRequestedServiceQuotaChangeHistoryRequest req = new ListRequestedServiceQuotaChangeHistoryRequest(                new ListRequestedServiceQuotaChangeHistoryRequest() {{
                                maxResults = 338007L;
                                nextToken = "vitae";
                                serviceCode = "laborum";
                                status = RequestStatusEnum.DENIED;
                            }};, ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY) {{
                maxResults = "enim";
                nextToken = "odit";
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            ListRequestedServiceQuotaChangeHistoryResponse res = sdk.sdk.listRequestedServiceQuotaChangeHistory(req);

            if (res.listRequestedServiceQuotaChangeHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRequestedServiceQuotaChangeHistoryByQuota

Retrieves the quota increase requests for the specified quota.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
import org.openapis.openapi.models.operations.ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
import org.openapis.openapi.models.operations.ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
import org.openapis.openapi.models.shared.RequestStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRequestedServiceQuotaChangeHistoryByQuotaRequest req = new ListRequestedServiceQuotaChangeHistoryByQuotaRequest(                new ListRequestedServiceQuotaChangeHistoryByQuotaRequest("error", "temporibus") {{
                                maxResults = 673660L;
                                nextToken = "quasi";
                                status = RequestStatusEnum.CASE_CLOSED;
                            }};, ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY_BY_QUOTA) {{
                maxResults = "voluptatibus";
                nextToken = "vero";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            ListRequestedServiceQuotaChangeHistoryByQuotaResponse res = sdk.sdk.listRequestedServiceQuotaChangeHistoryByQuota(req);

            if (res.listRequestedServiceQuotaChangeHistoryByQuotaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceQuotaIncreaseRequestsInTemplate

Lists the quota increase requests in the specified quota request template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceQuotaIncreaseRequestsInTemplateRequest;
import org.openapis.openapi.models.operations.ListServiceQuotaIncreaseRequestsInTemplateResponse;
import org.openapis.openapi.models.operations.ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceQuotaIncreaseRequestsInTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceQuotaIncreaseRequestsInTemplateRequest req = new ListServiceQuotaIncreaseRequestsInTemplateRequest(                new ListServiceQuotaIncreaseRequestsInTemplateRequest() {{
                                awsRegion = "doloremque";
                                maxResults = 441711L;
                                nextToken = "ut";
                                serviceCode = "maiores";
                            }};, ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_SERVICE_QUOTA_INCREASE_REQUESTS_IN_TEMPLATE) {{
                maxResults = "dicta";
                nextToken = "corporis";
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            ListServiceQuotaIncreaseRequestsInTemplateResponse res = sdk.sdk.listServiceQuotaIncreaseRequestsInTemplate(req);

            if (res.listServiceQuotaIncreaseRequestsInTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceQuotas

Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceQuotasRequest;
import org.openapis.openapi.models.operations.ListServiceQuotasResponse;
import org.openapis.openapi.models.operations.ListServiceQuotasXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceQuotasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceQuotasRequest req = new ListServiceQuotasRequest(                new ListServiceQuotasRequest("quae") {{
                                maxResults = 216822L;
                                nextToken = "quidem";
                            }};, ListServiceQuotasXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_SERVICE_QUOTAS) {{
                maxResults = "molestias";
                nextToken = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ListServiceQuotasResponse res = sdk.sdk.listServiceQuotas(req);

            if (res.listServiceQuotasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

Lists the names and codes for the services integrated with Service Quotas.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.operations.ListServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesRequest req = new ListServicesRequest(                new ListServicesRequest() {{
                                maxResults = 83112L;
                                nextToken = "itaque";
                            }};, ListServicesXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_SERVICES) {{
                maxResults = "incidunt";
                nextToken = "enim";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            ListServicesResponse res = sdk.sdk.listServices(req);

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of the tags assigned to the specified applied quota.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("modi");, ListTagsForResourceXAmzTargetEnum.SERVICE_QUOTAS_V20190624_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
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

## putServiceQuotaIncreaseRequestIntoTemplate

Adds a quota increase request to your quota request template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutServiceQuotaIncreaseRequestIntoTemplateRequest;
import org.openapis.openapi.models.operations.PutServiceQuotaIncreaseRequestIntoTemplateResponse;
import org.openapis.openapi.models.operations.PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutServiceQuotaIncreaseRequestIntoTemplateRequest req = new PutServiceQuotaIncreaseRequestIntoTemplateRequest(                new PutServiceQuotaIncreaseRequestIntoTemplateRequest("alias", 1464.41, "dolorum", "excepturi");, PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            PutServiceQuotaIncreaseRequestIntoTemplateResponse res = sdk.sdk.putServiceQuotaIncreaseRequestIntoTemplate(req);

            if (res.putServiceQuotaIncreaseRequestIntoTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestServiceQuotaIncrease

Submits a quota increase request for the specified quota.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestServiceQuotaIncreaseRequest;
import org.openapis.openapi.models.operations.RequestServiceQuotaIncreaseResponse;
import org.openapis.openapi.models.operations.RequestServiceQuotaIncreaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.RequestServiceQuotaIncreaseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestServiceQuotaIncreaseRequest req = new RequestServiceQuotaIncreaseRequest(                new RequestServiceQuotaIncreaseRequest(5761.57, "aliquid", "provident");, RequestServiceQuotaIncreaseXAmzTargetEnum.SERVICE_QUOTAS_V20190624_REQUEST_SERVICE_QUOTA_INCREASE) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            RequestServiceQuotaIncreaseResponse res = sdk.sdk.requestServiceQuotaIncrease(req);

            if (res.requestServiceQuotaIncreaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to the specified applied quota. You can include one or more tags to add to the quota.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("in",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("dicta", "magnam") {{
                                                    key = "maiores";
                                                    value = "rerum";
                                                }}),
                                                add(new Tag("ea", "aliquid") {{
                                                    key = "cumque";
                                                    value = "facere";
                                                }}),
                                                add(new Tag("non", "occaecati") {{
                                                    key = "laborum";
                                                    value = "accusamus";
                                                }}),
                                                add(new Tag("delectus", "quidem") {{
                                                    key = "enim";
                                                    value = "accusamus";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.SERVICE_QUOTAS_V20190624_TAG_RESOURCE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
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

Removes tags from the specified applied quota. You can specify one or more tags to remove.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("nisi",                 new String[]{{
                                                add("natus"),
                                                add("omnis"),
                                            }});, UntagResourceXAmzTargetEnum.SERVICE_QUOTAS_V20190624_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
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
