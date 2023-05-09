# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ssm-sap/2018-05-10/go
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
    res, err := s.DeleteResourcePermission(ctx, operations.DeleteResourcePermissionRequest{
        RequestBody: operations.DeleteResourcePermissionRequestBody{
            ActionType: operations.DeleteResourcePermissionRequestBodyActionTypeEnumRestore.ToPointer(),
            ResourceArn: "corrupti",
            SourceResourceArn: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePermissionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteResourcePermission](docs/sdk/README.md#deleteresourcepermission) - Removes permissions associated with the target database.
* [DeregisterApplication](docs/sdk/README.md#deregisterapplication) - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* [GetApplication](docs/sdk/README.md#getapplication) - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* [GetComponent](docs/sdk/README.md#getcomponent) - Gets the component of an application registered with AWS Systems Manager for SAP.
* [GetDatabase](docs/sdk/README.md#getdatabase) - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* [GetOperation](docs/sdk/README.md#getoperation) - Gets the details of an operation by specifying the operation ID.
* [GetResourcePermission](docs/sdk/README.md#getresourcepermission) - Gets permissions associated with the target database.
* [ListApplications](docs/sdk/README.md#listapplications) - Lists all the applications registered with AWS Systems Manager for SAP.
* [ListComponents](docs/sdk/README.md#listcomponents) - Lists all the components registered with AWS Systems Manager for SAP.
* [ListDatabases](docs/sdk/README.md#listdatabases) - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* [ListOperations](docs/sdk/README.md#listoperations) - Lists the operations performed by AWS Systems Manager for SAP.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* [PutResourcePermission](docs/sdk/README.md#putresourcepermission) - Adds permissions to the target database.
* [RegisterApplication](docs/sdk/README.md#registerapplication) - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* [TagResource](docs/sdk/README.md#tagresource) - Creates tag for a resource by specifying the ARN.
* [UntagResource](docs/sdk/README.md#untagresource) - Delete the tags for a resource.
* [UpdateApplicationSettings](docs/sdk/README.md#updateapplicationsettings) - Updates the settings of an application registered with AWS Systems Manager for SAP.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
