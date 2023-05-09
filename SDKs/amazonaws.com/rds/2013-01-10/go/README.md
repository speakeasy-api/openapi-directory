# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds/2013-01-10/go
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
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0110,
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
* [GETCopyDBSnapshot](docs/sdk/README.md#getcopydbsnapshot)
* [GETCreateDBInstance](docs/sdk/README.md#getcreatedbinstance)
* [GETCreateDBInstanceReadReplica](docs/sdk/README.md#getcreatedbinstancereadreplica)
* [GETCreateDBParameterGroup](docs/sdk/README.md#getcreatedbparametergroup)
* [GETCreateDBSecurityGroup](docs/sdk/README.md#getcreatedbsecuritygroup)
* [GETCreateDBSnapshot](docs/sdk/README.md#getcreatedbsnapshot)
* [GETCreateDBSubnetGroup](docs/sdk/README.md#getcreatedbsubnetgroup)
* [GETCreateEventSubscription](docs/sdk/README.md#getcreateeventsubscription)
* [GETCreateOptionGroup](docs/sdk/README.md#getcreateoptiongroup)
* [GETDeleteDBInstance](docs/sdk/README.md#getdeletedbinstance)
* [GETDeleteDBParameterGroup](docs/sdk/README.md#getdeletedbparametergroup)
* [GETDeleteDBSecurityGroup](docs/sdk/README.md#getdeletedbsecuritygroup)
* [GETDeleteDBSnapshot](docs/sdk/README.md#getdeletedbsnapshot)
* [GETDeleteDBSubnetGroup](docs/sdk/README.md#getdeletedbsubnetgroup)
* [GETDeleteEventSubscription](docs/sdk/README.md#getdeleteeventsubscription)
* [GETDeleteOptionGroup](docs/sdk/README.md#getdeleteoptiongroup)
* [GETDescribeDBEngineVersions](docs/sdk/README.md#getdescribedbengineversions)
* [GETDescribeDBInstances](docs/sdk/README.md#getdescribedbinstances)
* [GETDescribeDBParameterGroups](docs/sdk/README.md#getdescribedbparametergroups)
* [GETDescribeDBParameters](docs/sdk/README.md#getdescribedbparameters)
* [GETDescribeDBSecurityGroups](docs/sdk/README.md#getdescribedbsecuritygroups)
* [GETDescribeDBSnapshots](docs/sdk/README.md#getdescribedbsnapshots)
* [GETDescribeDBSubnetGroups](docs/sdk/README.md#getdescribedbsubnetgroups)
* [GETDescribeEngineDefaultParameters](docs/sdk/README.md#getdescribeenginedefaultparameters)
* [GETDescribeEventCategories](docs/sdk/README.md#getdescribeeventcategories)
* [GETDescribeEventSubscriptions](docs/sdk/README.md#getdescribeeventsubscriptions)
* [GETDescribeEvents](docs/sdk/README.md#getdescribeevents)
* [GETDescribeOptionGroupOptions](docs/sdk/README.md#getdescribeoptiongroupoptions)
* [GETDescribeOptionGroups](docs/sdk/README.md#getdescribeoptiongroups)
* [GETDescribeOrderableDBInstanceOptions](docs/sdk/README.md#getdescribeorderabledbinstanceoptions)
* [GETDescribeReservedDBInstances](docs/sdk/README.md#getdescribereserveddbinstances)
* [GETDescribeReservedDBInstancesOfferings](docs/sdk/README.md#getdescribereserveddbinstancesofferings)
* [GETListTagsForResource](docs/sdk/README.md#getlisttagsforresource)
* [GETModifyDBInstance](docs/sdk/README.md#getmodifydbinstance)
* [GETModifyDBSubnetGroup](docs/sdk/README.md#getmodifydbsubnetgroup)
* [GETModifyEventSubscription](docs/sdk/README.md#getmodifyeventsubscription)
* [GETPromoteReadReplica](docs/sdk/README.md#getpromotereadreplica)
* [GETPurchaseReservedDBInstancesOffering](docs/sdk/README.md#getpurchasereserveddbinstancesoffering)
* [GETRebootDBInstance](docs/sdk/README.md#getrebootdbinstance)
* [GETRemoveSourceIdentifierFromSubscription](docs/sdk/README.md#getremovesourceidentifierfromsubscription)
* [GETRemoveTagsFromResource](docs/sdk/README.md#getremovetagsfromresource)
* [GETRestoreDBInstanceFromDBSnapshot](docs/sdk/README.md#getrestoredbinstancefromdbsnapshot)
* [GETRestoreDBInstanceToPointInTime](docs/sdk/README.md#getrestoredbinstancetopointintime)
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
