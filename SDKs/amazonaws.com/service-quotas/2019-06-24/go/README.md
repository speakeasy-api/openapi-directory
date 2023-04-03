# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/service-quotas/2019-06-24/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
        XAmzTarget: "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
    }

    ctx := context.Background()
    res, err := s.AssociateServiceQuotaTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceQuotaTemplateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `AssociateServiceQuotaTemplate` - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* `DeleteServiceQuotaIncreaseRequestFromTemplate` - Deletes the quota increase request for the specified quota from your quota request template.
* `DisassociateServiceQuotaTemplate` - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* `GetAWSDefaultServiceQuota` - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* `GetAssociationForServiceQuotaTemplate` - Retrieves the status of the association for the quota request template.
* `GetRequestedServiceQuotaChange` - Retrieves information about the specified quota increase request.
* `GetServiceQuota` - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* `GetServiceQuotaIncreaseRequestFromTemplate` - Retrieves information about the specified quota increase request in your quota request template.
* `ListAWSDefaultServiceQuotas` - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* `ListRequestedServiceQuotaChangeHistory` - Retrieves the quota increase requests for the specified service.
* `ListRequestedServiceQuotaChangeHistoryByQuota` - Retrieves the quota increase requests for the specified quota.
* `ListServiceQuotaIncreaseRequestsInTemplate` - Lists the quota increase requests in the specified quota request template.
* `ListServiceQuotas` - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* `ListServices` - Lists the names and codes for the services integrated with Service Quotas.
* `ListTagsForResource` - Returns a list of the tags assigned to the specified applied quota.
* `PutServiceQuotaIncreaseRequestIntoTemplate` - Adds a quota increase request to your quota request template.
* `RequestServiceQuotaIncrease` - Submits a quota increase request for the specified quota.
* `TagResource` - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* `UntagResource` - Removes tags from the specified applied quota. You can specify one or more tags to remove.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
