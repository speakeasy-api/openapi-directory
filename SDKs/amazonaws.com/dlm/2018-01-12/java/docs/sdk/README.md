# SDK

## Overview

<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"> Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dlm/>
### Available Operations

* [createLifecyclePolicy](#createlifecyclepolicy) - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* [deleteLifecyclePolicy](#deletelifecyclepolicy) - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* [getLifecyclePolicies](#getlifecyclepolicies) - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* [getLifecyclePolicy](#getlifecyclepolicy) - Gets detailed information about the specified lifecycle policy.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateLifecyclePolicy](#updatelifecyclepolicy) - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

## createLifecyclePolicy

Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequestBody;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequestBodyPolicyDetails;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateLifecyclePolicyResponse;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ArchiveRetainRule;
import org.openapis.openapi.models.shared.ArchiveRule;
import org.openapis.openapi.models.shared.CreateRule;
import org.openapis.openapi.models.shared.CrossRegionCopyAction;
import org.openapis.openapi.models.shared.CrossRegionCopyDeprecateRule;
import org.openapis.openapi.models.shared.CrossRegionCopyRetainRule;
import org.openapis.openapi.models.shared.CrossRegionCopyRule;
import org.openapis.openapi.models.shared.DeprecateRule;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EventParameters;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventSourceValuesEnum;
import org.openapis.openapi.models.shared.EventTypeValuesEnum;
import org.openapis.openapi.models.shared.FastRestoreRule;
import org.openapis.openapi.models.shared.IntervalUnitValuesEnum;
import org.openapis.openapi.models.shared.LocationValuesEnum;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.PolicyTypeValuesEnum;
import org.openapis.openapi.models.shared.ResourceLocationValuesEnum;
import org.openapis.openapi.models.shared.ResourceTypeValuesEnum;
import org.openapis.openapi.models.shared.RetainRule;
import org.openapis.openapi.models.shared.RetentionArchiveTier;
import org.openapis.openapi.models.shared.RetentionIntervalUnitValuesEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShareRule;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLifecyclePolicyRequest req = new CreateLifecyclePolicyRequest(                new CreateLifecyclePolicyRequestBody("eum", "autem",                 new CreateLifecyclePolicyRequestBodyPolicyDetails() {{
                                                actions = new org.openapis.openapi.models.shared.Action[]{{
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "veritatis";
                                                                                        }};, "ipsa") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "assumenda";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 181151L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "quisquam";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "illum";
                                                                                        }};, "quo") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "id";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 696997L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                            }};
                                                                            target = "quo";
                                                                        }}),
                                                                    }}, "fuga") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "quasi";
                                                                            }};, "tempora") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "assumenda";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 860552L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "libero";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "molestiae";
                                                                            }};, "magnam") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "numquam";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 131482L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "ipsa";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "rem";
                                                                            }};, "fuga") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "odio";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 262118L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "esse";
                                                            }}),
                                                        }};
                                                        name = "Yvette Stehr";
                                                    }}),
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "odio";
                                                                                        }};, "occaecati") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "nihil";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 518835L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                            }};
                                                                            target = "aliquam";
                                                                        }}),
                                                                    }}, "commodi") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "consequatur";
                                                                            }};, "tempora") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "eos";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 373813L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "cupiditate";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "quo";
                                                                            }};, "esse") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "debitis";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 370853L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "sequi";
                                                            }}),
                                                        }};
                                                        name = "Kevin Rau";
                                                    }}),
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "vero";
                                                                                        }};, "aliquid") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "veritatis";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 458604L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                            }};
                                                                            target = "nam";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "molestiae";
                                                                                        }};, "rerum") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "quasi";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 904045L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};
                                                                            target = "harum";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "sit";
                                                                                        }};, "culpa") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "occaecati";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 327720L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "eligendi";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "consequatur";
                                                                                        }};, "minus") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "tempore";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 240020L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                            }};
                                                                            target = "consequuntur";
                                                                        }}),
                                                                    }}, "quaerat") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "porro";
                                                                            }};, "eum") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "dolores";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 645570L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "accusantium";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "fugit";
                                                                            }};, "fuga") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "quas";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 510017L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "deleniti";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "minima";
                                                                            }};, "nisi") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "mollitia";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 277596L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "explicabo";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "explicabo";
                                                                            }};, "saepe") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "fugit";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 956406L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "ratione";
                                                            }}),
                                                        }};
                                                        name = "Ivan Bosco";
                                                    }}),
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "aliquam";
                                                                                        }};, "sapiente") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "libero";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 849039L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "accusantium";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "nisi";
                                                                                        }};, "aut") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "dicta";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 355369L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};
                                                                            target = "ullam";
                                                                        }}),
                                                                    }}, "voluptatum") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "a";
                                                                            }};, "nulla") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "consectetur";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 458139L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "provident";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "error";
                                                                            }};, "sint") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "quas";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 457223L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "a";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "asperiores";
                                                                            }};, "facere") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "pariatur";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 820767L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "eveniet";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "culpa";
                                                                            }};, "aliquid") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "veritatis";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 159414L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "similique";
                                                            }}),
                                                        }};
                                                        name = "Scott Wehner";
                                                    }}),
                                                }};
                                                eventSource = new EventSource(EventSourceValuesEnum.MANAGED_CWE) {{
                                                    parameters = new EventParameters("qui", EventTypeValuesEnum.SHARE_SNAPSHOT,                 new String[]{{
                                                                        add("ex"),
                                                                        add("deleniti"),
                                                                        add("itaque"),
                                                                        add("dolorum"),
                                                                    }});;
                                                }};;
                                                parameters = new Parameters() {{
                                                    excludeBootVolume = false;
                                                    excludeDataVolumeTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("quasi", "at") {{
                                                            key = "omnis";
                                                            value = "tenetur";
                                                        }}),
                                                    }};
                                                    noReboot = false;
                                                }};;
                                                policyType = PolicyTypeValuesEnum.EBS_SNAPSHOT_MANAGEMENT;
                                                resourceLocations = new org.openapis.openapi.models.shared.ResourceLocationValuesEnum[]{{
                                                    add(ResourceLocationValuesEnum.CLOUD),
                                                    add(ResourceLocationValuesEnum.CLOUD),
                                                }};
                                                resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeValuesEnum[]{{
                                                    add(ResourceTypeValuesEnum.VOLUME),
                                                }};
                                                schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                                                    add(new Schedule() {{
                                                        archiveRule = new ArchiveRule(                new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                            count = 428796L;
                                                                                            interval = 649832L;
                                                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                                        }};);) {{
                                                            retainRule = new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                count = 522371L;
                                                                                interval = 15606L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};) {{
                                                                retentionArchiveTier = new RetentionArchiveTier() {{
                                                                    count = 614465L;
                                                                    interval = 839513L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                            }};
                                                        }};
                                                        copyTags = false;
                                                        createRule = new CreateRule() {{
                                                            cronExpression = "corrupti";
                                                            interval = 251941L;
                                                            intervalUnit = IntervalUnitValuesEnum.HOURS;
                                                            location = LocationValuesEnum.CLOUD;
                                                            times = new String[]{{
                                                                add("occaecati"),
                                                            }};
                                                        }};
                                                        crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "impedit";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 131055L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 12036L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "dicta";
                                                                targetRegion = "maiores";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "natus";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 244651L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 374323L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "aperiam";
                                                                targetRegion = "ea";
                                                            }}),
                                                        }};
                                                        deprecateRule = new DeprecateRule() {{
                                                            count = 310067L;
                                                            interval = 162954L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                        }};
                                                        fastRestoreRule = new FastRestoreRule(                new String[]{{
                                                                            add("porro"),
                                                                            add("quod"),
                                                                        }}) {{
                                                            availabilityZones = new String[]{{
                                                                add("maxime"),
                                                                add("dignissimos"),
                                                                add("officia"),
                                                            }};
                                                            count = 989410L;
                                                            interval = 368102L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                        }};
                                                        name = "Kathleen Flatley";
                                                        retainRule = new RetainRule() {{
                                                            count = 380729L;
                                                            interval = 246063L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                        }};
                                                        shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                                            add(new ShareRule(                new String[]{{
                                                                                add("possimus"),
                                                                                add("facilis"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("totam"),
                                                                    add("fugiat"),
                                                                    add("vel"),
                                                                    add("ducimus"),
                                                                }};
                                                                unshareInterval = 554688L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("recusandae"),
                                                                                add("aliquid"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("commodi"),
                                                                    add("in"),
                                                                    add("corporis"),
                                                                }};
                                                                unshareInterval = 968904L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("earum"),
                                                                                add("facere"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("cum"),
                                                                }};
                                                                unshareInterval = 232627L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                        }};
                                                        tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("reiciendis", "quidem") {{
                                                                key = "doloribus";
                                                                value = "suscipit";
                                                            }}),
                                                            add(new Tag("dolore", "sunt") {{
                                                                key = "saepe";
                                                                value = "necessitatibus";
                                                            }}),
                                                        }};
                                                        variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("amet", "beatae") {{
                                                                key = "adipisci";
                                                                value = "non";
                                                            }}),
                                                            add(new Tag("debitis", "consectetur") {{
                                                                key = "dignissimos";
                                                                value = "a";
                                                            }}),
                                                            add(new Tag("laboriosam", "ipsa") {{
                                                                key = "corporis";
                                                                value = "harum";
                                                            }}),
                                                            add(new Tag("vitae", "accusamus") {{
                                                                key = "voluptates";
                                                                value = "libero";
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                targetTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("voluptas", "voluptas") {{
                                                        key = "tempora";
                                                        value = "aspernatur";
                                                    }}),
                                                    add(new Tag("nobis", "dolorum") {{
                                                        key = "voluptas";
                                                        value = "minima";
                                                    }}),
                                                    add(new Tag("dolores", "blanditiis") {{
                                                        key = "adipisci";
                                                        value = "minus";
                                                    }}),
                                                }};
                                            }};, CreateLifecyclePolicyRequestBodyStateEnum.ENABLED) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aliquam", "officiis");
                                    put("temporibus", "ullam");
                                }};
                            }};) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "cum";
                xAmzCredential = "blanditiis";
                xAmzDate = "quas";
                xAmzSecurityToken = "hic";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "culpa";
            }};            

            CreateLifecyclePolicyResponse res = sdk.sdk.createLifecyclePolicy(req);

            if (res.createLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLifecyclePolicy

<p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLifecyclePolicyRequest req = new DeleteLifecyclePolicyRequest("pariatur") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "exercitationem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "sit";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "sed";
            }};            

            DeleteLifecyclePolicyResponse res = sdk.sdk.deleteLifecyclePolicy(req);

            if (res.deleteLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLifecyclePolicies

<p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLifecyclePoliciesRequest;
import org.openapis.openapi.models.operations.GetLifecyclePoliciesResponse;
import org.openapis.openapi.models.operations.GetLifecyclePoliciesStateEnum;
import org.openapis.openapi.models.shared.ResourceTypeValuesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLifecyclePoliciesRequest req = new GetLifecyclePoliciesRequest() {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facilis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "iste";
                policyIds = new String[]{{
                    add("laborum"),
                    add("sed"),
                }};
                resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeValuesEnum[]{{
                    add(ResourceTypeValuesEnum.VOLUME),
                    add(ResourceTypeValuesEnum.INSTANCE),
                }};
                state = GetLifecyclePoliciesStateEnum.ENABLED;
                tagsToAdd = new String[]{{
                    add("unde"),
                    add("architecto"),
                }};
                targetTags = new String[]{{
                    add("sapiente"),
                    add("debitis"),
                }};
            }};            

            GetLifecyclePoliciesResponse res = sdk.sdk.getLifecyclePolicies(req);

            if (res.getLifecyclePoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLifecyclePolicy

Gets detailed information about the specified lifecycle policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.GetLifecyclePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLifecyclePolicyRequest req = new GetLifecyclePolicyRequest("reiciendis") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "maiores";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "sed";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "eius";
            }};            

            GetLifecyclePolicyResponse res = sdk.sdk.getLifecyclePolicy(req);

            if (res.getLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("ipsum") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "quos";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds the specified tags to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("sit", "non");
                                                put("officiis", "praesentium");
                                            }});, "facilis") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("veniam",                 new String[]{{
                                add("recusandae"),
                                add("reiciendis"),
                            }}) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLifecyclePolicy

<p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.UpdateLifecyclePolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateLifecyclePolicyRequestBodyPolicyDetails;
import org.openapis.openapi.models.operations.UpdateLifecyclePolicyRequestBodyStateEnum;
import org.openapis.openapi.models.operations.UpdateLifecyclePolicyResponse;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ArchiveRetainRule;
import org.openapis.openapi.models.shared.ArchiveRule;
import org.openapis.openapi.models.shared.CreateRule;
import org.openapis.openapi.models.shared.CrossRegionCopyAction;
import org.openapis.openapi.models.shared.CrossRegionCopyDeprecateRule;
import org.openapis.openapi.models.shared.CrossRegionCopyRetainRule;
import org.openapis.openapi.models.shared.CrossRegionCopyRule;
import org.openapis.openapi.models.shared.DeprecateRule;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EventParameters;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventSourceValuesEnum;
import org.openapis.openapi.models.shared.EventTypeValuesEnum;
import org.openapis.openapi.models.shared.FastRestoreRule;
import org.openapis.openapi.models.shared.IntervalUnitValuesEnum;
import org.openapis.openapi.models.shared.LocationValuesEnum;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.PolicyTypeValuesEnum;
import org.openapis.openapi.models.shared.ResourceLocationValuesEnum;
import org.openapis.openapi.models.shared.ResourceTypeValuesEnum;
import org.openapis.openapi.models.shared.RetainRule;
import org.openapis.openapi.models.shared.RetentionArchiveTier;
import org.openapis.openapi.models.shared.RetentionIntervalUnitValuesEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShareRule;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLifecyclePolicyRequest req = new UpdateLifecyclePolicyRequest(                new UpdateLifecyclePolicyRequestBody() {{
                                description = "beatae";
                                executionRoleArn = "laudantium";
                                policyDetails = new UpdateLifecyclePolicyRequestBodyPolicyDetails() {{
                                    actions = new org.openapis.openapi.models.shared.Action[]{{
                                        add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "voluptatum";
                                                                            }};, "quas") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "consequatur";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 460220L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "sit";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "ex";
                                                                            }};, "sed") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "repudiandae";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 361151L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "blanditiis";
                                                            }}),
                                                        }}, "sit") {{
                                            crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                    cmkArn = "error";
                                                                }};, "hic") {{
                                                    encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                        cmkArn = "cum";
                                                        encrypted = false;
                                                    }};
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 386827L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                    }};
                                                    target = "voluptatum";
                                                }}),
                                                add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                    cmkArn = "nostrum";
                                                                }};, "officia") {{
                                                    encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                        cmkArn = "expedita";
                                                        encrypted = false;
                                                    }};
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 892863L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                    }};
                                                    target = "dolorum";
                                                }}),
                                                add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                    cmkArn = "atque";
                                                                }};, "fugit") {{
                                                    encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                        cmkArn = "dolorum";
                                                        encrypted = false;
                                                    }};
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 548361L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                    }};
                                                    target = "tempora";
                                                }}),
                                            }};
                                            name = "Janis Bartell";
                                        }}),
                                        add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "unde";
                                                                            }};, "reiciendis") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "alias";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 227084L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "voluptate";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "perferendis";
                                                                            }};, "est") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "provident";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 833819L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "voluptates";
                                                            }}),
                                                        }}, "quidem") {{
                                            crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                    cmkArn = "incidunt";
                                                                }};, "reiciendis") {{
                                                    encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                        cmkArn = "nostrum";
                                                        encrypted = false;
                                                    }};
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 906172L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                    }};
                                                    target = "consequatur";
                                                }}),
                                                add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                    cmkArn = "occaecati";
                                                                }};, "labore") {{
                                                    encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                        cmkArn = "dolorem";
                                                        encrypted = false;
                                                    }};
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 690894L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                    }};
                                                    target = "architecto";
                                                }}),
                                            }};
                                            name = "Alberto Osinski";
                                        }}),
                                    }};
                                    eventSource = new EventSource(EventSourceValuesEnum.MANAGED_CWE) {{
                                        parameters = new EventParameters("reprehenderit", EventTypeValuesEnum.SHARE_SNAPSHOT,                 new String[]{{
                                                            add("fuga"),
                                                            add("praesentium"),
                                                            add("mollitia"),
                                                            add("veniam"),
                                                        }});;
                                    }};;
                                    parameters = new Parameters() {{
                                        excludeBootVolume = false;
                                        excludeDataVolumeTags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("quasi", "atque") {{
                                                key = "quisquam";
                                                value = "repudiandae";
                                            }}),
                                        }};
                                        noReboot = false;
                                    }};;
                                    policyType = PolicyTypeValuesEnum.IMAGE_MANAGEMENT;
                                    resourceLocations = new org.openapis.openapi.models.shared.ResourceLocationValuesEnum[]{{
                                        add(ResourceLocationValuesEnum.OUTPOST),
                                        add(ResourceLocationValuesEnum.CLOUD),
                                        add(ResourceLocationValuesEnum.OUTPOST),
                                        add(ResourceLocationValuesEnum.OUTPOST),
                                    }};
                                    resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeValuesEnum[]{{
                                        add(ResourceTypeValuesEnum.VOLUME),
                                    }};
                                    schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                                        add(new Schedule() {{
                                            archiveRule = new ArchiveRule(                new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                count = 880107L;
                                                                                interval = 618826L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};);) {{
                                                retainRule = new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                    count = 623295L;
                                                                    interval = 887265L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};) {{
                                                    retentionArchiveTier = new RetentionArchiveTier() {{
                                                        count = 826825L;
                                                        interval = 410301L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                    }};
                                                }};
                                            }};
                                            copyTags = false;
                                            createRule = new CreateRule() {{
                                                cronExpression = "aspernatur";
                                                interval = 404425L;
                                                intervalUnit = IntervalUnitValuesEnum.HOURS;
                                                location = LocationValuesEnum.OUTPOST_LOCAL;
                                                times = new String[]{{
                                                    add("at"),
                                                    add("error"),
                                                    add("blanditiis"),
                                                }};
                                            }};
                                            crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                                add(new CrossRegionCopyRule(false) {{
                                                    cmkArn = "repudiandae";
                                                    copyTags = false;
                                                    deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                        interval = 542129L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                    }};
                                                    encrypted = false;
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 120919L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                    }};
                                                    target = "dolorum";
                                                    targetRegion = "repellendus";
                                                }}),
                                                add(new CrossRegionCopyRule(false) {{
                                                    cmkArn = "labore";
                                                    copyTags = false;
                                                    deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                        interval = 968287L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                    }};
                                                    encrypted = false;
                                                    retainRule = new CrossRegionCopyRetainRule() {{
                                                        interval = 919783L;
                                                        intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                    }};
                                                    target = "accusantium";
                                                    targetRegion = "beatae";
                                                }}),
                                            }};
                                            deprecateRule = new DeprecateRule() {{
                                                count = 174772L;
                                                interval = 316488L;
                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                            }};
                                            fastRestoreRule = new FastRestoreRule(                new String[]{{
                                                                add("occaecati"),
                                                            }}) {{
                                                availabilityZones = new String[]{{
                                                    add("a"),
                                                }};
                                                count = 562783L;
                                                interval = 300029L;
                                                intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                            }};
                                            name = "Freddie King";
                                            retainRule = new RetainRule() {{
                                                count = 580887L;
                                                interval = 160230L;
                                                intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                            }};
                                            shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                                add(new ShareRule(                new String[]{{
                                                                    add("eveniet"),
                                                                    add("non"),
                                                                    add("vero"),
                                                                }}) {{
                                                    targetAccounts = new String[]{{
                                                        add("reprehenderit"),
                                                        add("error"),
                                                    }};
                                                    unshareInterval = 76486L;
                                                    unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                }}),
                                                add(new ShareRule(                new String[]{{
                                                                    add("molestiae"),
                                                                }}) {{
                                                    targetAccounts = new String[]{{
                                                        add("iure"),
                                                    }};
                                                    unshareInterval = 59944L;
                                                    unshareIntervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                }}),
                                                add(new ShareRule(                new String[]{{
                                                                    add("voluptatum"),
                                                                    add("rem"),
                                                                    add("aliquam"),
                                                                }}) {{
                                                    targetAccounts = new String[]{{
                                                        add("qui"),
                                                        add("cum"),
                                                        add("iure"),
                                                        add("necessitatibus"),
                                                    }};
                                                    unshareInterval = 187552L;
                                                    unshareIntervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                }}),
                                            }};
                                            tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("corporis", "perspiciatis") {{
                                                    key = "repellat";
                                                    value = "alias";
                                                }}),
                                                add(new Tag("voluptas", "alias") {{
                                                    key = "nihil";
                                                    value = "mollitia";
                                                }}),
                                            }};
                                            variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("id", "minima") {{
                                                    key = "reiciendis";
                                                    value = "dolores";
                                                }}),
                                                add(new Tag("nesciunt", "quae") {{
                                                    key = "dolore";
                                                    value = "dolorum";
                                                }}),
                                                add(new Tag("quaerat", "molestiae") {{
                                                    key = "recusandae";
                                                    value = "omnis";
                                                }}),
                                                add(new Tag("culpa", "adipisci") {{
                                                    key = "ex";
                                                    value = "ut";
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    targetTags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag("nemo", "recusandae") {{
                                            key = "laudantium";
                                            value = "eum";
                                        }}),
                                        add(new Tag("quis", "eum") {{
                                            key = "esse";
                                            value = "provident";
                                        }}),
                                        add(new Tag("aspernatur", "ullam") {{
                                            key = "reiciendis";
                                            value = "provident";
                                        }}),
                                        add(new Tag("nostrum", "mollitia") {{
                                            key = "quasi";
                                            value = "animi";
                                        }}),
                                    }};
                                }};;
                                state = UpdateLifecyclePolicyRequestBodyStateEnum.DISABLED;
                            }};, "possimus") {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "aliquid";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ullam";
            }};            

            UpdateLifecyclePolicyResponse res = sdk.sdk.updateLifecyclePolicy(req);

            if (res.updateLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
