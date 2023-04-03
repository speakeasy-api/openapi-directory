<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLifecyclePolicyRequest req = new CreateLifecyclePolicyRequest() {{
                requestBody = new CreateLifecyclePolicyRequestBody() {{
                    description = "corrupti";
                    executionRoleArn = "provident";
                    policyDetails = new CreateLifecyclePolicyRequestBodyPolicyDetails() {{
                        actions = new org.openapis.openapi.models.shared.Action[]{{
                            add(new Action() {{
                                crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "unde";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 857946;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "illum";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "vel";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 623564;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "suscipit";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "iure";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 297534;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "ipsa";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "delectus";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 272656;
                                            intervalUnit = "WEEKS";
                                        }};
                                        target = "molestiae";
                                    }}),
                                }};
                                name = "minus";
                            }}),
                            add(new Action() {{
                                crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "voluptatum";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 479977;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "nisi";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "recusandae";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 836079;
                                            intervalUnit = "DAYS";
                                        }};
                                        target = "quis";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "veritatis";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 648172;
                                            intervalUnit = "DAYS";
                                        }};
                                        target = "ipsam";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "repellendus";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 957156;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "odit";
                                    }}),
                                }};
                                name = "at";
                            }}),
                            add(new Action() {{
                                crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "maiores";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 473608;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "quod";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "esse";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 520478;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "dolorum";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "dicta";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 720633;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "occaecati";
                                    }}),
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "fugit";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 537373;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "optio";
                                    }}),
                                }};
                                name = "totam";
                            }}),
                        }};
                        eventSource = new EventSource() {{
                            parameters = new EventParameters() {{
                                descriptionRegex = "beatae";
                                eventType = "shareSnapshot";
                                snapshotOwner = new String[]{{
                                    add("molestiae"),
                                    add("modi"),
                                }};
                            }};
                            type = "MANAGED_CWE";
                        }};
                        parameters = new Parameters() {{
                            excludeBootVolume = false;
                            excludeDataVolumeTags = new org.openapis.openapi.models.shared.Tag[]{{
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
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }}            

            CreateLifecyclePolicyResponse res = sdk.createLifecyclePolicy(req);

            if (res.createLifecyclePolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->