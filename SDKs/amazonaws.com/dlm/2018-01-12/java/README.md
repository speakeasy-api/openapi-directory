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
import org.openapis.openapi.models.operations.CreateLifecyclePolicyHeaders;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequestBodyPolicyDetails;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequestBody;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyResponse;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.ShareRule;
import org.openapis.openapi.models.shared.RetentionIntervalUnitValuesEnum;
import org.openapis.openapi.models.shared.RetainRule;
import org.openapis.openapi.models.shared.FastRestoreRule;
import org.openapis.openapi.models.shared.DeprecateRule;
import org.openapis.openapi.models.shared.CrossRegionCopyRule;
import org.openapis.openapi.models.shared.CrossRegionCopyRetainRule;
import org.openapis.openapi.models.shared.CrossRegionCopyDeprecateRule;
import org.openapis.openapi.models.shared.CreateRule;
import org.openapis.openapi.models.shared.LocationValuesEnum;
import org.openapis.openapi.models.shared.IntervalUnitValuesEnum;
import org.openapis.openapi.models.shared.ArchiveRule;
import org.openapis.openapi.models.shared.ArchiveRetainRule;
import org.openapis.openapi.models.shared.RetentionArchiveTier;
import org.openapis.openapi.models.shared.ResourceTypeValuesEnum;
import org.openapis.openapi.models.shared.ResourceLocationValuesEnum;
import org.openapis.openapi.models.shared.PolicyTypeValuesEnum;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventSourceValuesEnum;
import org.openapis.openapi.models.shared.EventParameters;
import org.openapis.openapi.models.shared.EventTypeValuesEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.CrossRegionCopyAction;
import org.openapis.openapi.models.shared.EncryptionConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateLifecyclePolicyRequest req = new CreateLifecyclePolicyRequest() {{
                headers = new CreateLifecyclePolicyHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateLifecyclePolicyRequestBody() {{
                    description = "illum";
                    executionRoleArn = "vel";
                    policyDetails = new CreateLifecyclePolicyRequestBodyPolicyDetails() {{
                        actions = new org.openapis.openapi.models.shared.Action[]{{
                            add(new Action() {{
                                crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "suscipit";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 437587;
                                            intervalUnit = "WEEKS";
                                        }};
                                        target = "debitis";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "ipsa";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 963663;
                                            intervalUnit = "WEEKS";
                                        }};
                                        target = "suscipit";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "molestiae";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 791725;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "voluptatum";
                                    }}),
                                }};
                                name = "iusto";
                            }}),
                            add(new Action() {{
                                crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "nisi";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 925597;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "ab";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "quis";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 87129;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "perferendis";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "ipsam";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 832620;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "quo";
                                    }}),
                                }};
                                name = "odit";
                            }}),
                            add(new Action() {{
                                crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "at";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 978619;
                                            intervalUnit = "WEEKS";
                                        }};
                                        target = "quod";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "quod";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 461479;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "porro";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "dolorum";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 118274;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "officia";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "occaecati";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 143353;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "hic";
                                    }}),
                                }};
                                name = "optio";
                            }}),
                        }};
                        eventSource = new EventSource() {{
                            parameters = new EventParameters() {{
                                descriptionRegex = "totam";
                                eventType = "shareSnapshot";
                                snapshotOwner = new String[]{{
                                    add("commodi"),
                                }};
                            }};
                            type = "MANAGED_CWE";
                        }};
                        parameters = new Parameters() {{
                            excludeBootVolume = false;
                            excludeDataVolumeTags = new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    key = "modi";
                                    value = "qui";
                                }}),
                                add(new Tag() {{
                                    key = "impedit";
                                    value = "cum";
                                }}),
                            }};
                            noReboot = false;
                        }};
                        policyType = "IMAGE_MANAGEMENT";
                        resourceLocations = new org.openapis.openapi.models.shared.ResourceLocationValuesEnum[]{{
                            add("OUTPOST"),
                        }};
                        resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeValuesEnum[]{{
                            add("VOLUME"),
                        }};
                        schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                            add(new Schedule() {{
                                archiveRule = new ArchiveRule() {{
                                    retainRule = new ArchiveRetainRule() {{
                                        retentionArchiveTier = new RetentionArchiveTier() {{
                                            count = 617636;
                                            interval = 149675;
                                            intervalUnit = "MONTHS";
                                        }};
                                    }};
                                }};
                                copyTags = false;
                                createRule = new CreateRule() {{
                                    cronExpression = "dolor";
                                    interval = 616934;
                                    intervalUnit = "HOURS";
                                    location = "CLOUD";
                                    times = new String[]{{
                                        add("saepe"),
                                        add("fuga"),
                                        add("in"),
                                        add("corporis"),
                                    }};
                                }};
                                crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "iure";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 902349;
                                            intervalUnit = "MONTHS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 99280;
                                            intervalUnit = "DAYS";
                                        }};
                                        target = "reiciendis";
                                        targetRegion = "est";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "mollitia";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 670638;
                                            intervalUnit = "DAYS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 210382;
                                            intervalUnit = "WEEKS";
                                        }};
                                        target = "explicabo";
                                        targetRegion = "nobis";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "enim";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 607831;
                                            intervalUnit = "WEEKS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 325047;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "accusantium";
                                        targetRegion = "iure";
                                    }}),
                                }};
                                deprecateRule = new DeprecateRule() {{
                                    count = 634274;
                                    interval = 988374;
                                    intervalUnit = "YEARS";
                                }};
                                fastRestoreRule = new FastRestoreRule() {{
                                    availabilityZones = new String[]{{
                                        add("mollitia"),
                                    }};
                                    count = 208876;
                                    interval = 635059;
                                    intervalUnit = "DAYS";
                                }};
                                name = "repellat";
                                retainRule = new RetainRule() {{
                                    count = 653108;
                                    interval = 581850;
                                    intervalUnit = "WEEKS";
                                }};
                                shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]{{
                                            add("molestiae"),
                                            add("velit"),
                                        }};
                                        unshareInterval = 623510;
                                        unshareIntervalUnit = "DAYS";
                                    }}),
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]{{
                                            add("vitae"),
                                            add("laborum"),
                                        }};
                                        unshareInterval = 656330;
                                        unshareIntervalUnit = "WEEKS";
                                    }}),
                                }};
                                tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quo";
                                        value = "sequi";
                                    }}),
                                }};
                                variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsam";
                                        value = "id";
                                    }}),
                                    add(new Tag() {{
                                        key = "possimus";
                                        value = "aut";
                                    }}),
                                    add(new Tag() {{
                                        key = "quasi";
                                        value = "error";
                                    }}),
                                    add(new Tag() {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                }};
                            }}),
                            add(new Schedule() {{
                                archiveRule = new ArchiveRule() {{
                                    retainRule = new ArchiveRetainRule() {{
                                        retentionArchiveTier = new RetentionArchiveTier() {{
                                            count = 96098;
                                            interval = 971945;
                                            intervalUnit = "YEARS";
                                        }};
                                    }};
                                }};
                                copyTags = false;
                                createRule = new CreateRule() {{
                                    cronExpression = "vero";
                                    interval = 468651;
                                    intervalUnit = "HOURS";
                                    location = "OUTPOST_LOCAL";
                                    times = new String[]{{
                                        add("ipsa"),
                                        add("omnis"),
                                        add("voluptate"),
                                        add("cum"),
                                    }};
                                }};
                                crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "doloremque";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 441711;
                                            intervalUnit = "WEEKS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 979587;
                                            intervalUnit = "DAYS";
                                        }};
                                        target = "corporis";
                                        targetRegion = "dolore";
                                    }}),
                                }};
                                deprecateRule = new DeprecateRule() {{
                                    count = 480894;
                                    interval = 118727;
                                    intervalUnit = "MONTHS";
                                }};
                                fastRestoreRule = new FastRestoreRule() {{
                                    availabilityZones = new String[]{{
                                        add("accusamus"),
                                        add("commodi"),
                                    }};
                                    count = 918236;
                                    interval = 64147;
                                    intervalUnit = "DAYS";
                                }};
                                name = "quidem";
                                retainRule = new RetainRule() {{
                                    count = 565189;
                                    interval = 566602;
                                    intervalUnit = "YEARS";
                                }};
                                shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]{{
                                            add("rem"),
                                            add("voluptates"),
                                            add("quasi"),
                                        }};
                                        unshareInterval = 921158;
                                        unshareIntervalUnit = "MONTHS";
                                    }}),
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]{{
                                            add("itaque"),
                                        }};
                                        unshareInterval = 277718;
                                        unshareIntervalUnit = "WEEKS";
                                    }}),
                                }};
                                tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "est";
                                        value = "quibusdam";
                                    }}),
                                }};
                                variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "deserunt";
                                        value = "distinctio";
                                    }}),
                                }};
                            }}),
                        }};
                        targetTags = new org.openapis.openapi.models.shared.Tag[]{{
                            add(new Tag() {{
                                key = "labore";
                                value = "modi";
                            }}),
                            add(new Tag() {{
                                key = "qui";
                                value = "aliquid";
                            }}),
                            add(new Tag() {{
                                key = "cupiditate";
                                value = "quos";
                            }}),
                            add(new Tag() {{
                                key = "perferendis";
                                value = "magni";
                            }}),
                        }};
                    }};
                    state = "DISABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("alias", "fugit");
                        put("dolorum", "excepturi");
                    }};
                }};
            }};            

            CreateLifecyclePolicyResponse res = sdk.createLifecyclePolicy(req);

            if (res.createLifecyclePolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createLifecyclePolicy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `deleteLifecyclePolicy` - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* `getLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `getLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateLifecyclePolicy` - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
