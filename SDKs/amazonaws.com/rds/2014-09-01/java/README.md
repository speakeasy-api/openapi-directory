# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionVersionEnum;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionRequest;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest() {{
                action = "AddSourceIdentifierToSubscription";
                sourceIdentifier = "corrupti";
                subscriptionName = "provident";
                version = "2014-09-01";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            GETAddSourceIdentifierToSubscriptionResponse res = sdk.getAddSourceIdentifierToSubscription(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getAddSourceIdentifierToSubscription`
* `getAuthorizeDBSecurityGroupIngress`
* `getDeleteDBInstance`
* `getDeleteDBParameterGroup`
* `getDeleteDBSecurityGroup`
* `getDeleteDBSnapshot`
* `getDeleteDBSubnetGroup`
* `getDeleteEventSubscription`
* `getDeleteOptionGroup`
* `getDownloadDBLogFilePortion`
* `getModifyDBInstance`
* `getModifyDBSubnetGroup`
* `getModifyEventSubscription`
* `getPromoteReadReplica`
* `getRebootDBInstance`
* `getRemoveSourceIdentifierFromSubscription`
* `getRemoveTagsFromResource`
* `getRevokeDBSecurityGroupIngress`
* `postAddSourceIdentifierToSubscription`
* `postAddTagsToResource`
* `postAuthorizeDBSecurityGroupIngress`
* `postCopyDBParameterGroup`
* `postCopyDBSnapshot`
* `postCopyOptionGroup`
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
* `postDescribeDBLogFiles`
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
* `postDownloadDBLogFilePortion`
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
