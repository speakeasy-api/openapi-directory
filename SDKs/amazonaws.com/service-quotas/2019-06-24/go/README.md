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
    res, err := s.AssociateServiceQuotaTemplate(ctx, operations.AssociateServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateServiceQuotaTemplate](docs/sdk/README.md#associateservicequotatemplate) - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* [DeleteServiceQuotaIncreaseRequestFromTemplate](docs/sdk/README.md#deleteservicequotaincreaserequestfromtemplate) - Deletes the quota increase request for the specified quota from your quota request template.
* [DisassociateServiceQuotaTemplate](docs/sdk/README.md#disassociateservicequotatemplate) - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* [GetAWSDefaultServiceQuota](docs/sdk/README.md#getawsdefaultservicequota) - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* [GetAssociationForServiceQuotaTemplate](docs/sdk/README.md#getassociationforservicequotatemplate) - Retrieves the status of the association for the quota request template.
* [GetRequestedServiceQuotaChange](docs/sdk/README.md#getrequestedservicequotachange) - Retrieves information about the specified quota increase request.
* [GetServiceQuota](docs/sdk/README.md#getservicequota) - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [GetServiceQuotaIncreaseRequestFromTemplate](docs/sdk/README.md#getservicequotaincreaserequestfromtemplate) - Retrieves information about the specified quota increase request in your quota request template.
* [ListAWSDefaultServiceQuotas](docs/sdk/README.md#listawsdefaultservicequotas) - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* [ListRequestedServiceQuotaChangeHistory](docs/sdk/README.md#listrequestedservicequotachangehistory) - Retrieves the quota increase requests for the specified service.
* [ListRequestedServiceQuotaChangeHistoryByQuota](docs/sdk/README.md#listrequestedservicequotachangehistorybyquota) - Retrieves the quota increase requests for the specified quota.
* [ListServiceQuotaIncreaseRequestsInTemplate](docs/sdk/README.md#listservicequotaincreaserequestsintemplate) - Lists the quota increase requests in the specified quota request template.
* [ListServiceQuotas](docs/sdk/README.md#listservicequotas) - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [ListServices](docs/sdk/README.md#listservices) - Lists the names and codes for the services integrated with Service Quotas.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of the tags assigned to the specified applied quota.
* [PutServiceQuotaIncreaseRequestIntoTemplate](docs/sdk/README.md#putservicequotaincreaserequestintotemplate) - Adds a quota increase request to your quota request template.
* [RequestServiceQuotaIncrease](docs/sdk/README.md#requestservicequotaincrease) - Submits a quota increase request for the specified quota.
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified applied quota. You can specify one or more tags to remove.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
