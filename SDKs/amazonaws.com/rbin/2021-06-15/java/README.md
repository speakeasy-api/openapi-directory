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
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleRequestBody;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyLockConfiguration;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.RetentionPeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UnlockDelay;
import org.openapis.openapi.models.shared.UnlockDelayUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest(                new CreateRuleRequestBody(CreateRuleRequestBodyResourceTypeEnum.EC2_IMAGE,                 new CreateRuleRequestBodyRetentionPeriod() {{
                                                retentionPeriodUnit = RetentionPeriodUnitEnum.DAYS;
                                                retentionPeriodValue = 715190L;
                                            }};) {{
                                description = "quibusdam";
                                lockConfiguration = new CreateRuleRequestBodyLockConfiguration() {{
                                    unlockDelay = new UnlockDelay(UnlockDelayUnitEnum.DAYS, 602763L);;
                                }};;
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("vel") {{
                                        resourceTagKey = "corrupti";
                                        resourceTagValue = "illum";
                                    }}),
                                    add(new ResourceTag("suscipit") {{
                                        resourceTagKey = "error";
                                        resourceTagValue = "deserunt";
                                    }}),
                                    add(new ResourceTag("debitis") {{
                                        resourceTagKey = "iure";
                                        resourceTagValue = "magnam";
                                    }}),
                                    add(new ResourceTag("tempora") {{
                                        resourceTagKey = "ipsa";
                                        resourceTagValue = "delectus";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("placeat", "voluptatum") {{
                                        key = "molestiae";
                                        value = "minus";
                                    }}),
                                    add(new Tag("nisi", "recusandae") {{
                                        key = "iusto";
                                        value = "excepturi";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateRuleResponse res = sdk.createRule(req);

            if (res.createRuleResponse != null) {
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

### [SDK](docs/sdk/README.md)

* [createRule](docs/sdk/README.md#createrule) - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [deleteRule](docs/sdk/README.md#deleterule) - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [getRule](docs/sdk/README.md#getrule) - Gets information about a Recycle Bin retention rule.
* [listRules](docs/sdk/README.md#listrules) - Lists the Recycle Bin retention rules in the Region.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to a retention rule.
* [lockRule](docs/sdk/README.md#lockrule) - Locks a retention rule. A locked retention rule can't be modified or deleted.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns tags to the specified retention rule.
* [unlockRule](docs/sdk/README.md#unlockrule) - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* [untagResource](docs/sdk/README.md#untagresource) - Unassigns a tag from a retention rule.
* [updateRule](docs/sdk/README.md#updaterule) - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
