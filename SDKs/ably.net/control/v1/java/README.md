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
import org.openapis.openapi.models.operations.DeleteAppsIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsIdResponse;
import org.openapis.openapi.models.operations.DeleteAppsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppsIdRequest req = new DeleteAppsIdRequest("corrupti");            

            DeleteAppsIdResponse res = sdk.apps.deleteAppsId(req, new DeleteAppsIdSecurity("provident") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apps](docs/apps/README.md)

* [deleteAppsId](docs/apps/README.md#deleteappsid) - Deletes an app
* [getAccountsAccountIdApps](docs/apps/README.md#getaccountsaccountidapps) - Lists account apps
* [patchAppsId](docs/apps/README.md#patchappsid) - Updates an app
* [postAccountsAccountIdApps](docs/apps/README.md#postaccountsaccountidapps) - Creates an app
* [postAppsIdPkcs12](docs/apps/README.md#postappsidpkcs12) - Updates app's APNS info from a .p12 file

### [keys](docs/keys/README.md)

* [getAppsAppIdKeys](docs/keys/README.md#getappsappidkeys) - Lists app keys
* [patchAppsAppIdKeysKeyId](docs/keys/README.md#patchappsappidkeyskeyid) - Updates a key
* [postAppsAppIdKeys](docs/keys/README.md#postappsappidkeys) - Creates a key
* [postAppsAppIdKeysKeyIdRevoke](docs/keys/README.md#postappsappidkeyskeyidrevoke) - Revokes a key

### [namespaces](docs/namespaces/README.md)

* [deleteAppsAppIdNamespacesNamespaceId](docs/namespaces/README.md#deleteappsappidnamespacesnamespaceid) - Deletes a namespace
* [getAppsAppIdNamespaces](docs/namespaces/README.md#getappsappidnamespaces) - Lists namespaces
* [patchAppsAppIdNamespacesNamespaceId](docs/namespaces/README.md#patchappsappidnamespacesnamespaceid) - Updates a namespace
* [postAppsAppIdNamespaces](docs/namespaces/README.md#postappsappidnamespaces) - Creates a namespace

### [queues](docs/queues/README.md)

* [deleteAppsAppIdQueuesQueueId](docs/queues/README.md#deleteappsappidqueuesqueueid) - Deletes a queue
* [getAppsAppIdQueues](docs/queues/README.md#getappsappidqueues) - Lists queues
* [postAppsAppIdQueues](docs/queues/README.md#postappsappidqueues) - Creates a queue

### [rules](docs/rules/README.md)

* [deleteAppsAppIdRulesRuleId](docs/rules/README.md#deleteappsappidrulesruleid) - Deletes a Integration Rule
* [getAppsAppIdRules](docs/rules/README.md#getappsappidrules) - Lists Integration rules
* [getAppsAppIdRulesRuleId](docs/rules/README.md#getappsappidrulesruleid) - Gets a Integration Rule by ID
* [patchAppsAppIdRulesRuleId](docs/rules/README.md#patchappsappidrulesruleid) - Updates a Integration Rule
* [postAppsAppIdRules](docs/rules/README.md#postappsappidrules) - Creates a Integration Rule

### [tokens](docs/tokens/README.md)

* [getMe](docs/tokens/README.md#getme) - Get token details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
