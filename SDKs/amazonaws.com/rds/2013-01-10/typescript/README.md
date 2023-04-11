# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds/2013-01-10/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds/2013-01-10/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GETAddSourceIdentifierToSubscriptionRequest,
  GETAddSourceIdentifierToSubscriptionResponse,
  GETAddSourceIdentifierToSubscriptionActionEnum,
  GETAddSourceIdentifierToSubscriptionVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAddSourceIdentifierToSubscriptionRequest = {
  action: GETAddSourceIdentifierToSubscriptionActionEnum.AddSourceIdentifierToSubscription,
  sourceIdentifier: "corrupti",
  subscriptionName: "provident",
  version: GETAddSourceIdentifierToSubscriptionVersionEnum.TwoThousandAndThirteen0110,
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getAddSourceIdentifierToSubscription(req).then((res: GETAddSourceIdentifierToSubscriptionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getAddSourceIdentifierToSubscription`
* `getAuthorizeDBSecurityGroupIngress`
* `getCopyDBSnapshot`
* `getCreateDBInstance`
* `getCreateDBInstanceReadReplica`
* `getCreateDBParameterGroup`
* `getCreateDBSecurityGroup`
* `getCreateDBSnapshot`
* `getCreateDBSubnetGroup`
* `getCreateEventSubscription`
* `getCreateOptionGroup`
* `getDeleteDBInstance`
* `getDeleteDBParameterGroup`
* `getDeleteDBSecurityGroup`
* `getDeleteDBSnapshot`
* `getDeleteDBSubnetGroup`
* `getDeleteEventSubscription`
* `getDeleteOptionGroup`
* `getDescribeDBEngineVersions`
* `getDescribeDBInstances`
* `getDescribeDBParameterGroups`
* `getDescribeDBParameters`
* `getDescribeDBSecurityGroups`
* `getDescribeDBSnapshots`
* `getDescribeDBSubnetGroups`
* `getDescribeEngineDefaultParameters`
* `getDescribeEventCategories`
* `getDescribeEventSubscriptions`
* `getDescribeEvents`
* `getDescribeOptionGroupOptions`
* `getDescribeOptionGroups`
* `getDescribeOrderableDBInstanceOptions`
* `getDescribeReservedDBInstances`
* `getDescribeReservedDBInstancesOfferings`
* `getListTagsForResource`
* `getModifyDBInstance`
* `getModifyDBSubnetGroup`
* `getModifyEventSubscription`
* `getPromoteReadReplica`
* `getPurchaseReservedDBInstancesOffering`
* `getRebootDBInstance`
* `getRemoveSourceIdentifierFromSubscription`
* `getRemoveTagsFromResource`
* `getRestoreDBInstanceFromDBSnapshot`
* `getRestoreDBInstanceToPointInTime`
* `getRevokeDBSecurityGroupIngress`
* `postAddSourceIdentifierToSubscription`
* `postAddTagsToResource`
* `postAuthorizeDBSecurityGroupIngress`
* `postCopyDBSnapshot`
* `postCreateDBInstance`
* `postCreateDBInstanceReadReplica`
* `postCreateDBParameterGroup`
* `postCreateDBSecurityGroup`
* `postCreateDBSnapshot`
* `postCreateDBSubnetGroup`
* `postCreateEventSubscription`
* `postCreateOptionGroup`
* `postDeleteDBInstance`
* `postDeleteDBParameterGroup`
* `postDeleteDBSecurityGroup`
* `postDeleteDBSnapshot`
* `postDeleteDBSubnetGroup`
* `postDeleteEventSubscription`
* `postDeleteOptionGroup`
* `postDescribeDBEngineVersions`
* `postDescribeDBInstances`
* `postDescribeDBParameterGroups`
* `postDescribeDBParameters`
* `postDescribeDBSecurityGroups`
* `postDescribeDBSnapshots`
* `postDescribeDBSubnetGroups`
* `postDescribeEngineDefaultParameters`
* `postDescribeEventCategories`
* `postDescribeEventSubscriptions`
* `postDescribeEvents`
* `postDescribeOptionGroupOptions`
* `postDescribeOptionGroups`
* `postDescribeOrderableDBInstanceOptions`
* `postDescribeReservedDBInstances`
* `postDescribeReservedDBInstancesOfferings`
* `postListTagsForResource`
* `postModifyDBInstance`
* `postModifyDBParameterGroup`
* `postModifyDBSubnetGroup`
* `postModifyEventSubscription`
* `postModifyOptionGroup`
* `postPromoteReadReplica`
* `postPurchaseReservedDBInstancesOffering`
* `postRebootDBInstance`
* `postRemoveSourceIdentifierFromSubscription`
* `postRemoveTagsFromResource`
* `postResetDBParameterGroup`
* `postRestoreDBInstanceFromDBSnapshot`
* `postRestoreDBInstanceToPointInTime`
* `postRevokeDBSecurityGroupIngress`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

