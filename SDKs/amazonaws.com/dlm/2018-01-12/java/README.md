# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateLifecyclePolicyRequest req = new CreateLifecyclePolicyRequest() {{
                headers = new CreateLifecyclePolicyHeaders() {{
                    xAmzAlgorithm = "doloremque";
                    xAmzContentSha256 = "nulla";
                    xAmzCredential = "et";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "praesentium";
                    xAmzSignature = "labore";
                    xAmzSignedHeaders = "accusamus";
                }};
                request = new CreateLifecyclePolicyRequestBody() {{
                    description = "aut";
                    executionRoleArn = "alias";
                    policyDetails = new CreateLifecyclePolicyRequestBodyPolicyDetails() {{
                        actions = new openapisdk.models.shared.Action[]() {{
                            add(new Action() {{
                                crossRegionCopy = new openapisdk.models.shared.CrossRegionCopyAction[]() {{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "voluptatem";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 5320768077586043095;
                                            intervalUnit = "DAYS";
                                        }};
                                        target = "nostrum";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "adipisci";
                                            encrypted = true;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 6537984888763423894;
                                            intervalUnit = "WEEKS";
                                        }};
                                        target = "delectus";
                                    }}),
                                }};
                                name = "tenetur";
                            }}),
                            add(new Action() {{
                                crossRegionCopy = new openapisdk.models.shared.CrossRegionCopyAction[]() {{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "quia";
                                            encrypted = true;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 8697756961697963853;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "nostrum";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "autem";
                                            encrypted = true;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 4506911669298280718;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "molestias";
                                    }}),
                                }};
                                name = "nihil";
                            }}),
                        }};
                        eventSource = new EventSource() {{
                            parameters = new EventParameters() {{
                                descriptionRegex = "consequatur";
                                eventType = "shareSnapshot";
                                snapshotOwner = new String[]() {{
                                    add("quae"),
                                    add("natus"),
                                }};
                            }};
                            type = "MANAGED_CWE";
                        }};
                        parameters = new Parameters() {{
                            excludeBootVolume = false;
                            noReboot = true;
                        }};
                        policyType = "EBS_SNAPSHOT_MANAGEMENT";
                        resourceLocations = new openapisdk.models.shared.ResourceLocationValuesEnum[]() {{
                            add("OUTPOST"),
                            add("CLOUD"),
                        }};
                        resourceTypes = new openapisdk.models.shared.ResourceTypeValuesEnum[]() {{
                            add("INSTANCE"),
                            add("INSTANCE"),
                            add("INSTANCE"),
                        }};
                        schedules = new openapisdk.models.shared.Schedule[]() {{
                            add(new Schedule() {{
                                copyTags = false;
                                createRule = new CreateRule() {{
                                    cronExpression = "sapiente";
                                    interval = 4642672273651120892;
                                    intervalUnit = "HOURS";
                                    location = "CLOUD";
                                    times = new String[]() {{
                                        add("quo"),
                                    }};
                                }};
                                crossRegionCopyRules = new openapisdk.models.shared.CrossRegionCopyRule[]() {{
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "ratione";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 6134675409536001115;
                                            intervalUnit = "DAYS";
                                        }};
                                        encrypted = true;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 1000668831263546934;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "aut";
                                        targetRegion = "minima";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "at";
                                        copyTags = true;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 127225875950264235;
                                            intervalUnit = "YEARS";
                                        }};
                                        encrypted = true;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 1325682419092169393;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "accusantium";
                                        targetRegion = "qui";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "ea";
                                        copyTags = true;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 8037355963908866572;
                                            intervalUnit = "MONTHS";
                                        }};
                                        encrypted = true;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 5643905309582698835;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "vero";
                                        targetRegion = "quis";
                                    }}),
                                }};
                                deprecateRule = new DeprecateRule() {{
                                    count = 3816780269387027271;
                                    interval = 3292878388625507251;
                                    intervalUnit = "WEEKS";
                                }};
                                fastRestoreRule = new FastRestoreRule() {{
                                    availabilityZones = new String[]() {{
                                        add("vitae"),
                                        add("nesciunt"),
                                        add("fugit"),
                                    }};
                                    count = 2502521760373555910;
                                    interval = 4666865012529559949;
                                    intervalUnit = "DAYS";
                                }};
                                name = "magni";
                                retainRule = new RetainRule() {{
                                    count = 5403100475415031532;
                                    interval = 500970383850890347;
                                    intervalUnit = "MONTHS";
                                }};
                                shareRules = new openapisdk.models.shared.ShareRule[]() {{
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]() {{
                                            add("qui"),
                                        }};
                                        unshareInterval = 4416889129261804116;
                                        unshareIntervalUnit = "YEARS";
                                    }}),
                                }};
                                tagsToAdd = new openapisdk.models.shared.Tag[]() {{
                                    add(new Tag() {{
                                        key = "doloribus";
                                        value = "accusantium";
                                    }}),
                                    add(new Tag() {{
                                        key = "explicabo";
                                        value = "rem";
                                    }}),
                                    add(new Tag() {{
                                        key = "corporis";
                                        value = "pariatur";
                                    }}),
                                }};
                                variableTags = new openapisdk.models.shared.Tag[]() {{
                                    add(new Tag() {{
                                        key = "quisquam";
                                        value = "animi";
                                    }}),
                                }};
                            }}),
                        }};
                        targetTags = new openapisdk.models.shared.Tag[]() {{
                            add(new Tag() {{
                                key = "beatae";
                                value = "iste";
                            }}),
                        }};
                    }};
                    state = "DISABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("corporis", "quo");
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
* `deleteLifecyclePolicy` - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
* `getLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `getLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateLifecyclePolicy` - Updates the specified lifecycle policy.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
