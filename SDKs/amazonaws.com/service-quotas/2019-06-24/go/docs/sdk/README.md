# SDK

## Overview

With Service Quotas, you can view and manage your quotas easily as your AWS workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicequotas/>
### Available Operations

* [AssociateServiceQuotaTemplate](#associateservicequotatemplate) - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* [DeleteServiceQuotaIncreaseRequestFromTemplate](#deleteservicequotaincreaserequestfromtemplate) - Deletes the quota increase request for the specified quota from your quota request template.
* [DisassociateServiceQuotaTemplate](#disassociateservicequotatemplate) - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* [GetAWSDefaultServiceQuota](#getawsdefaultservicequota) - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* [GetAssociationForServiceQuotaTemplate](#getassociationforservicequotatemplate) - Retrieves the status of the association for the quota request template.
* [GetRequestedServiceQuotaChange](#getrequestedservicequotachange) - Retrieves information about the specified quota increase request.
* [GetServiceQuota](#getservicequota) - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [GetServiceQuotaIncreaseRequestFromTemplate](#getservicequotaincreaserequestfromtemplate) - Retrieves information about the specified quota increase request in your quota request template.
* [ListAWSDefaultServiceQuotas](#listawsdefaultservicequotas) - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* [ListRequestedServiceQuotaChangeHistory](#listrequestedservicequotachangehistory) - Retrieves the quota increase requests for the specified service.
* [ListRequestedServiceQuotaChangeHistoryByQuota](#listrequestedservicequotachangehistorybyquota) - Retrieves the quota increase requests for the specified quota.
* [ListServiceQuotaIncreaseRequestsInTemplate](#listservicequotaincreaserequestsintemplate) - Lists the quota increase requests in the specified quota request template.
* [ListServiceQuotas](#listservicequotas) - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [ListServices](#listservices) - Lists the names and codes for the services integrated with Service Quotas.
* [ListTagsForResource](#listtagsforresource) - Returns a list of the tags assigned to the specified applied quota.
* [PutServiceQuotaIncreaseRequestIntoTemplate](#putservicequotaincreaserequestintotemplate) - Adds a quota increase request to your quota request template.
* [RequestServiceQuotaIncrease](#requestservicequotaincrease) - Submits a quota increase request for the specified quota.
* [TagResource](#tagresource) - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* [UntagResource](#untagresource) - Removes tags from the specified applied quota. You can specify one or more tags to remove.

## AssociateServiceQuotaTemplate

Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateServiceQuotaTemplate(ctx, operations.AssociateServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.AssociateServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624AssociateServiceQuotaTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceQuotaTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteServiceQuotaIncreaseRequestFromTemplate

Deletes the quota increase request for the specified quota from your quota request template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteServiceQuotaIncreaseRequestFromTemplate(ctx, operations.DeleteServiceQuotaIncreaseRequestFromTemplateRequest{
        DeleteServiceQuotaIncreaseRequestFromTemplateRequest: shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest{
            AwsRegion: "veritatis",
            QuotaCode: "deserunt",
            ServiceCode: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnumServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceQuotaIncreaseRequestFromTemplateResponse != nil {
        // handle response
    }
}
```

## DisassociateServiceQuotaTemplate

Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateServiceQuotaTemplate(ctx, operations.DisassociateServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
            "dolorum": "dicta",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.DisassociateServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624DisassociateServiceQuotaTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateServiceQuotaTemplateResponse != nil {
        // handle response
    }
}
```

## GetAWSDefaultServiceQuota

Retrieves the default value for the specified quota. The default value does not reflect any quota increases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAWSDefaultServiceQuota(ctx, operations.GetAWSDefaultServiceQuotaRequest{
        GetAWSDefaultServiceQuotaRequest: shared.GetAWSDefaultServiceQuotaRequest{
            QuotaCode: "totam",
            ServiceCode: "beatae",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.GetAWSDefaultServiceQuotaXAmzTargetEnumServiceQuotasV20190624GetAwsDefaultServiceQuota,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAWSDefaultServiceQuotaResponse != nil {
        // handle response
    }
}
```

## GetAssociationForServiceQuotaTemplate

Retrieves the status of the association for the quota request template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAssociationForServiceQuotaTemplate(ctx, operations.GetAssociationForServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "excepturi": "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.GetAssociationForServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624GetAssociationForServiceQuotaTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssociationForServiceQuotaTemplateResponse != nil {
        // handle response
    }
}
```

## GetRequestedServiceQuotaChange

Retrieves information about the specified quota increase request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRequestedServiceQuotaChange(ctx, operations.GetRequestedServiceQuotaChangeRequest{
        GetRequestedServiceQuotaChangeRequest: shared.GetRequestedServiceQuotaChangeRequest{
            RequestID: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.GetRequestedServiceQuotaChangeXAmzTargetEnumServiceQuotasV20190624GetRequestedServiceQuotaChange,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRequestedServiceQuotaChangeResponse != nil {
        // handle response
    }
}
```

## GetServiceQuota

Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceQuota(ctx, operations.GetServiceQuotaRequest{
        GetServiceQuotaRequest: shared.GetServiceQuotaRequest{
            QuotaCode: "saepe",
            ServiceCode: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.GetServiceQuotaXAmzTargetEnumServiceQuotasV20190624GetServiceQuota,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceQuotaResponse != nil {
        // handle response
    }
}
```

## GetServiceQuotaIncreaseRequestFromTemplate

Retrieves information about the specified quota increase request in your quota request template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceQuotaIncreaseRequestFromTemplate(ctx, operations.GetServiceQuotaIncreaseRequestFromTemplateRequest{
        GetServiceQuotaIncreaseRequestFromTemplateRequest: shared.GetServiceQuotaIncreaseRequestFromTemplateRequest{
            AwsRegion: "dolorem",
            QuotaCode: "corporis",
            ServiceCode: "explicabo",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnumServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceQuotaIncreaseRequestFromTemplateResponse != nil {
        // handle response
    }
}
```

## ListAWSDefaultServiceQuotas

Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAWSDefaultServiceQuotas(ctx, operations.ListAWSDefaultServiceQuotasRequest{
        ListAWSDefaultServiceQuotasRequest: shared.ListAWSDefaultServiceQuotasRequest{
            MaxResults: sdk.Int64(438601),
            NextToken: sdk.String("culpa"),
            ServiceCode: "doloribus",
        },
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.ListAWSDefaultServiceQuotasXAmzTargetEnumServiceQuotasV20190624ListAwsDefaultServiceQuotas,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAWSDefaultServiceQuotasResponse != nil {
        // handle response
    }
}
```

## ListRequestedServiceQuotaChangeHistory

Retrieves the quota increase requests for the specified service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRequestedServiceQuotaChangeHistory(ctx, operations.ListRequestedServiceQuotaChangeHistoryRequest{
        ListRequestedServiceQuotaChangeHistoryRequest: shared.ListRequestedServiceQuotaChangeHistoryRequest{
            MaxResults: sdk.Int64(253291),
            NextToken: sdk.String("commodi"),
            ServiceCode: sdk.String("quam"),
            Status: shared.RequestStatusEnumApproved.ToPointer(),
        },
        MaxResults: sdk.String("velit"),
        NextToken: sdk.String("error"),
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.ListRequestedServiceQuotaChangeHistoryXAmzTargetEnumServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRequestedServiceQuotaChangeHistoryResponse != nil {
        // handle response
    }
}
```

## ListRequestedServiceQuotaChangeHistoryByQuota

Retrieves the quota increase requests for the specified quota.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRequestedServiceQuotaChangeHistoryByQuota(ctx, operations.ListRequestedServiceQuotaChangeHistoryByQuotaRequest{
        ListRequestedServiceQuotaChangeHistoryByQuotaRequest: shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest{
            MaxResults: sdk.Int64(778346),
            NextToken: sdk.String("sequi"),
            QuotaCode: "tenetur",
            ServiceCode: "ipsam",
            Status: shared.RequestStatusEnumDenied.ToPointer(),
        },
        MaxResults: sdk.String("possimus"),
        NextToken: sdk.String("aut"),
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnumServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRequestedServiceQuotaChangeHistoryByQuotaResponse != nil {
        // handle response
    }
}
```

## ListServiceQuotaIncreaseRequestsInTemplate

Lists the quota increase requests in the specified quota request template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceQuotaIncreaseRequestsInTemplate(ctx, operations.ListServiceQuotaIncreaseRequestsInTemplateRequest{
        ListServiceQuotaIncreaseRequestsInTemplateRequest: shared.ListServiceQuotaIncreaseRequestsInTemplateRequest{
            AwsRegion: sdk.String("vero"),
            MaxResults: sdk.Int64(468651),
            NextToken: sdk.String("praesentium"),
            ServiceCode: sdk.String("voluptatibus"),
        },
        MaxResults: sdk.String("ipsa"),
        NextToken: sdk.String("omnis"),
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnumServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceQuotaIncreaseRequestsInTemplateResponse != nil {
        // handle response
    }
}
```

## ListServiceQuotas

Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceQuotas(ctx, operations.ListServiceQuotasRequest{
        ListServiceQuotasRequest: shared.ListServiceQuotasRequest{
            MaxResults: sdk.Int64(120196),
            NextToken: sdk.String("corporis"),
            ServiceCode: "dolore",
        },
        MaxResults: sdk.String("iusto"),
        NextToken: sdk.String("dicta"),
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.ListServiceQuotasXAmzTargetEnumServiceQuotasV20190624ListServiceQuotas,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceQuotasResponse != nil {
        // handle response
    }
}
```

## ListServices

Lists the names and codes for the services integrated with Service Quotas.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServices(ctx, operations.ListServicesRequest{
        ListServicesRequest: shared.ListServicesRequest{
            MaxResults: sdk.Int64(692472),
            NextToken: sdk.String("molestias"),
        },
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("pariatur"),
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.ListServicesXAmzTargetEnumServiceQuotasV20190624ListServices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of the tags assigned to the specified applied quota.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "veritatis",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumServiceQuotasV20190624ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutServiceQuotaIncreaseRequestIntoTemplate

Adds a quota increase request to your quota request template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutServiceQuotaIncreaseRequestIntoTemplate(ctx, operations.PutServiceQuotaIncreaseRequestIntoTemplateRequest{
        PutServiceQuotaIncreaseRequestIntoTemplateRequest: shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest{
            AwsRegion: "deserunt",
            DesiredValue: 7163.27,
            QuotaCode: "quibusdam",
            ServiceCode: "labore",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnumServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutServiceQuotaIncreaseRequestIntoTemplateResponse != nil {
        // handle response
    }
}
```

## RequestServiceQuotaIncrease

Submits a quota increase request for the specified quota.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RequestServiceQuotaIncrease(ctx, operations.RequestServiceQuotaIncreaseRequest{
        RequestServiceQuotaIncreaseRequest: shared.RequestServiceQuotaIncreaseRequest{
            DesiredValue: 8289.4,
            QuotaCode: "ipsam",
            ServiceCode: "alias",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.RequestServiceQuotaIncreaseXAmzTargetEnumServiceQuotasV20190624RequestServiceQuotaIncrease,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestServiceQuotaIncreaseResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to the specified applied quota. You can include one or more tags to add to the quota.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "delectus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "non",
                    Value: "eligendi",
                },
                shared.Tag{
                    Key: "sint",
                    Value: "aliquid",
                },
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumServiceQuotasV20190624TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from the specified applied quota. You can specify one or more tags to remove.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "dolorum",
            TagKeys: []string{
                "in",
                "illum",
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumServiceQuotasV20190624UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
