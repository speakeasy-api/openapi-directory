# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds/2013-02-12/go
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

    req := operations.GETAddSourceIdentifierToSubscriptionRequest{
        Action: "AddSourceIdentifierToSubscription",
        SourceIdentifier: "corrupti",
        SubscriptionName: "provident",
        Version: "2013-02-12",
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
    }

    ctx := context.Background()
    res, err := s.GETAddSourceIdentifierToSubscription(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GETAddSourceIdentifierToSubscription`
* `GETAuthorizeDBSecurityGroupIngress`
* `GETCopyDBSnapshot`
* `GETCreateDBInstance`
* `GETCreateDBInstanceReadReplica`
* `GETCreateDBParameterGroup`
* `GETCreateDBSecurityGroup`
* `GETCreateDBSnapshot`
* `GETCreateDBSubnetGroup`
* `GETCreateEventSubscription`
* `GETCreateOptionGroup`
* `GETDeleteDBInstance`
* `GETDeleteDBParameterGroup`
* `GETDeleteDBSecurityGroup`
* `GETDeleteDBSnapshot`
* `GETDeleteDBSubnetGroup`
* `GETDeleteEventSubscription`
* `GETDeleteOptionGroup`
* `GETDescribeDBEngineVersions`
* `GETDescribeDBInstances`
* `GETDescribeDBLogFiles`
* `GETDescribeDBParameterGroups`
* `GETDescribeDBParameters`
* `GETDescribeDBSecurityGroups`
* `GETDescribeDBSnapshots`
* `GETDescribeDBSubnetGroups`
* `GETDescribeEngineDefaultParameters`
* `GETDescribeEventCategories`
* `GETDescribeEventSubscriptions`
* `GETDescribeEvents`
* `GETDescribeOptionGroupOptions`
* `GETDescribeOptionGroups`
* `GETDescribeOrderableDBInstanceOptions`
* `GETDescribeReservedDBInstances`
* `GETDescribeReservedDBInstancesOfferings`
* `GETDownloadDBLogFilePortion`
* `GETListTagsForResource`
* `GETModifyDBInstance`
* `GETModifyDBSubnetGroup`
* `GETModifyEventSubscription`
* `GETPromoteReadReplica`
* `GETPurchaseReservedDBInstancesOffering`
* `GETRebootDBInstance`
* `GETRemoveSourceIdentifierFromSubscription`
* `GETRemoveTagsFromResource`
* `GETRestoreDBInstanceFromDBSnapshot`
* `GETRestoreDBInstanceToPointInTime`
* `GETRevokeDBSecurityGroupIngress`
* `POSTAddSourceIdentifierToSubscription`
* `POSTAddTagsToResource`
* `POSTAuthorizeDBSecurityGroupIngress`
* `POSTCopyDBSnapshot`
* `POSTCreateDBInstance`
* `POSTCreateDBInstanceReadReplica`
* `POSTCreateDBParameterGroup`
* `POSTCreateDBSecurityGroup`
* `POSTCreateDBSnapshot`
* `POSTCreateDBSubnetGroup`
* `POSTCreateEventSubscription`
* `POSTCreateOptionGroup`
* `POSTDeleteDBInstance`
* `POSTDeleteDBParameterGroup`
* `POSTDeleteDBSecurityGroup`
* `POSTDeleteDBSnapshot`
* `POSTDeleteDBSubnetGroup`
* `POSTDeleteEventSubscription`
* `POSTDeleteOptionGroup`
* `POSTDescribeDBEngineVersions`
* `POSTDescribeDBInstances`
* `POSTDescribeDBLogFiles`
* `POSTDescribeDBParameterGroups`
* `POSTDescribeDBParameters`
* `POSTDescribeDBSecurityGroups`
* `POSTDescribeDBSnapshots`
* `POSTDescribeDBSubnetGroups`
* `POSTDescribeEngineDefaultParameters`
* `POSTDescribeEventCategories`
* `POSTDescribeEventSubscriptions`
* `POSTDescribeEvents`
* `POSTDescribeOptionGroupOptions`
* `POSTDescribeOptionGroups`
* `POSTDescribeOrderableDBInstanceOptions`
* `POSTDescribeReservedDBInstances`
* `POSTDescribeReservedDBInstancesOfferings`
* `POSTDownloadDBLogFilePortion`
* `POSTListTagsForResource`
* `POSTModifyDBInstance`
* `POSTModifyDBParameterGroup`
* `POSTModifyDBSubnetGroup`
* `POSTModifyEventSubscription`
* `POSTModifyOptionGroup`
* `POSTPromoteReadReplica`
* `POSTPurchaseReservedDBInstancesOffering`
* `POSTRebootDBInstance`
* `POSTRemoveSourceIdentifierFromSubscription`
* `POSTRemoveTagsFromResource`
* `POSTResetDBParameterGroup`
* `POSTRestoreDBInstanceFromDBSnapshot`
* `POSTRestoreDBInstanceToPointInTime`
* `POSTRevokeDBSecurityGroupIngress`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
