# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds/2013-09-09/go
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
    res, err := s.GETAddSourceIdentifierToSubscription(ctx, operations.GETAddSourceIdentifierToSubscriptionRequest{
        Action: operations.GETAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription,
        SourceIdentifier: "corrupti",
        SubscriptionName: "provident",
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0909,
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

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GETAddSourceIdentifierToSubscription](docs/sdk/README.md#getaddsourceidentifiertosubscription)
* [GETAuthorizeDBSecurityGroupIngress](docs/sdk/README.md#getauthorizedbsecuritygroupingress)
* [GETDeleteDBInstance](docs/sdk/README.md#getdeletedbinstance)
* [GETDeleteDBParameterGroup](docs/sdk/README.md#getdeletedbparametergroup)
* [GETDeleteDBSecurityGroup](docs/sdk/README.md#getdeletedbsecuritygroup)
* [GETDeleteDBSnapshot](docs/sdk/README.md#getdeletedbsnapshot)
* [GETDeleteDBSubnetGroup](docs/sdk/README.md#getdeletedbsubnetgroup)
* [GETDeleteEventSubscription](docs/sdk/README.md#getdeleteeventsubscription)
* [GETDeleteOptionGroup](docs/sdk/README.md#getdeleteoptiongroup)
* [GETDownloadDBLogFilePortion](docs/sdk/README.md#getdownloaddblogfileportion)
* [GETModifyDBInstance](docs/sdk/README.md#getmodifydbinstance)
* [GETModifyDBSubnetGroup](docs/sdk/README.md#getmodifydbsubnetgroup)
* [GETModifyEventSubscription](docs/sdk/README.md#getmodifyeventsubscription)
* [GETPromoteReadReplica](docs/sdk/README.md#getpromotereadreplica)
* [GETRebootDBInstance](docs/sdk/README.md#getrebootdbinstance)
* [GETRemoveSourceIdentifierFromSubscription](docs/sdk/README.md#getremovesourceidentifierfromsubscription)
* [GETRemoveTagsFromResource](docs/sdk/README.md#getremovetagsfromresource)
* [GETRevokeDBSecurityGroupIngress](docs/sdk/README.md#getrevokedbsecuritygroupingress)
* [POSTAddSourceIdentifierToSubscription](docs/sdk/README.md#postaddsourceidentifiertosubscription)
* [POSTAddTagsToResource](docs/sdk/README.md#postaddtagstoresource)
* [POSTAuthorizeDBSecurityGroupIngress](docs/sdk/README.md#postauthorizedbsecuritygroupingress)
* [POSTCopyDBSnapshot](docs/sdk/README.md#postcopydbsnapshot)
* [POSTCreateDBInstance](docs/sdk/README.md#postcreatedbinstance)
* [POSTCreateDBInstanceReadReplica](docs/sdk/README.md#postcreatedbinstancereadreplica)
* [POSTCreateDBParameterGroup](docs/sdk/README.md#postcreatedbparametergroup)
* [POSTCreateDBSecurityGroup](docs/sdk/README.md#postcreatedbsecuritygroup)
* [POSTCreateDBSnapshot](docs/sdk/README.md#postcreatedbsnapshot)
* [POSTCreateDBSubnetGroup](docs/sdk/README.md#postcreatedbsubnetgroup)
* [POSTCreateEventSubscription](docs/sdk/README.md#postcreateeventsubscription)
* [POSTCreateOptionGroup](docs/sdk/README.md#postcreateoptiongroup)
* [POSTDeleteDBInstance](docs/sdk/README.md#postdeletedbinstance)
* [POSTDeleteDBParameterGroup](docs/sdk/README.md#postdeletedbparametergroup)
* [POSTDeleteDBSecurityGroup](docs/sdk/README.md#postdeletedbsecuritygroup)
* [POSTDeleteDBSnapshot](docs/sdk/README.md#postdeletedbsnapshot)
* [POSTDeleteDBSubnetGroup](docs/sdk/README.md#postdeletedbsubnetgroup)
* [POSTDeleteEventSubscription](docs/sdk/README.md#postdeleteeventsubscription)
* [POSTDeleteOptionGroup](docs/sdk/README.md#postdeleteoptiongroup)
* [POSTDescribeDBEngineVersions](docs/sdk/README.md#postdescribedbengineversions)
* [POSTDescribeDBInstances](docs/sdk/README.md#postdescribedbinstances)
* [POSTDescribeDBLogFiles](docs/sdk/README.md#postdescribedblogfiles)
* [POSTDescribeDBParameterGroups](docs/sdk/README.md#postdescribedbparametergroups)
* [POSTDescribeDBParameters](docs/sdk/README.md#postdescribedbparameters)
* [POSTDescribeDBSecurityGroups](docs/sdk/README.md#postdescribedbsecuritygroups)
* [POSTDescribeDBSnapshots](docs/sdk/README.md#postdescribedbsnapshots)
* [POSTDescribeDBSubnetGroups](docs/sdk/README.md#postdescribedbsubnetgroups)
* [POSTDescribeEngineDefaultParameters](docs/sdk/README.md#postdescribeenginedefaultparameters)
* [POSTDescribeEventCategories](docs/sdk/README.md#postdescribeeventcategories)
* [POSTDescribeEventSubscriptions](docs/sdk/README.md#postdescribeeventsubscriptions)
* [POSTDescribeEvents](docs/sdk/README.md#postdescribeevents)
* [POSTDescribeOptionGroupOptions](docs/sdk/README.md#postdescribeoptiongroupoptions)
* [POSTDescribeOptionGroups](docs/sdk/README.md#postdescribeoptiongroups)
* [POSTDescribeOrderableDBInstanceOptions](docs/sdk/README.md#postdescribeorderabledbinstanceoptions)
* [POSTDescribeReservedDBInstances](docs/sdk/README.md#postdescribereserveddbinstances)
* [POSTDescribeReservedDBInstancesOfferings](docs/sdk/README.md#postdescribereserveddbinstancesofferings)
* [POSTDownloadDBLogFilePortion](docs/sdk/README.md#postdownloaddblogfileportion)
* [POSTListTagsForResource](docs/sdk/README.md#postlisttagsforresource)
* [POSTModifyDBInstance](docs/sdk/README.md#postmodifydbinstance)
* [POSTModifyDBParameterGroup](docs/sdk/README.md#postmodifydbparametergroup)
* [POSTModifyDBSubnetGroup](docs/sdk/README.md#postmodifydbsubnetgroup)
* [POSTModifyEventSubscription](docs/sdk/README.md#postmodifyeventsubscription)
* [POSTModifyOptionGroup](docs/sdk/README.md#postmodifyoptiongroup)
* [POSTPromoteReadReplica](docs/sdk/README.md#postpromotereadreplica)
* [POSTPurchaseReservedDBInstancesOffering](docs/sdk/README.md#postpurchasereserveddbinstancesoffering)
* [POSTRebootDBInstance](docs/sdk/README.md#postrebootdbinstance)
* [POSTRemoveSourceIdentifierFromSubscription](docs/sdk/README.md#postremovesourceidentifierfromsubscription)
* [POSTRemoveTagsFromResource](docs/sdk/README.md#postremovetagsfromresource)
* [POSTResetDBParameterGroup](docs/sdk/README.md#postresetdbparametergroup)
* [POSTRestoreDBInstanceFromDBSnapshot](docs/sdk/README.md#postrestoredbinstancefromdbsnapshot)
* [POSTRestoreDBInstanceToPointInTime](docs/sdk/README.md#postrestoredbinstancetopointintime)
* [POSTRevokeDBSecurityGroupIngress](docs/sdk/README.md#postrevokedbsecuritygroupingress)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
