<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLifecyclePolicyRequest req = new CreateLifecyclePolicyRequest(                new CreateLifecyclePolicyRequestBody("provident", "distinctio",                 new CreateLifecyclePolicyRequestBodyPolicyDetails() {{
                                                actions = new org.openapis.openapi.models.shared.Action[]{{
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "ipsam";
                                                                                        }};, "repellendus") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "quis";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 87129L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "perferendis";
                                                                        }}),
                                                                    }}, "sapiente") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "error";
                                                                            }};, "deserunt") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "nulla";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 544883L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "vel";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "ipsa";
                                                                            }};, "delectus") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "suscipit";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 437587L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "debitis";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "placeat";
                                                                            }};, "voluptatum") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "tempora";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 383441L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "minus";
                                                            }}),
                                                        }};
                                                        name = "Miriam Huel";
                                                    }}),
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "sed";
                                                                                        }};, "iste") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "aspernatur";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 18789L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};
                                                                            target = "natus";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "saepe";
                                                                                        }};, "fuga") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "dolor";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 616934L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};
                                                                            target = "hic";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "saepe";
                                                                                        }};, "quidem") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "in";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 359508L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "iure";
                                                                        }}),
                                                                    }}, "architecto") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "molestiae";
                                                                            }};, "quod") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "odit";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 870013L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "maiores";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "dolorum";
                                                                            }};, "dicta") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "quod";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 461479L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "porro";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "deleniti";
                                                                            }};, "hic") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "nam";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 639921L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "fugit";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "molestiae";
                                                                            }};, "modi") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "optio";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 521848L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "commodi";
                                                            }}),
                                                        }};
                                                        name = "Krista Rippin";
                                                    }}),
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "culpa";
                                                                                        }};, "doloribus") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "minima";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 570197L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                            }};
                                                                            target = "iure";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "culpa";
                                                                                        }};, "consequuntur") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "sapiente";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 102044L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "dolorem";
                                                                        }}),
                                                                    }}, "repellat") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "dolores";
                                                                            }};, "dolorem") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "reiciendis";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 666767L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "laborum";
                                                            }}),
                                                        }};
                                                        name = "Rose Rolfson";
                                                    }}),
                                                    add(new Action(                new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "nihil";
                                                                                        }};, "praesentium") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "quasi";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 971945L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                            }};
                                                                            target = "vero";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "cum";
                                                                                        }};, "perferendis") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "voluptatibus";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 55714L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};
                                                                            target = "voluptate";
                                                                        }}),
                                                                        add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                            cmkArn = "dicta";
                                                                                        }};, "corporis") {{
                                                                            encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                                cmkArn = "doloremque";
                                                                                encrypted = false;
                                                                            }};
                                                                            retainRule = new CrossRegionCopyRetainRule() {{
                                                                                interval = 441711L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};
                                                                            target = "maiores";
                                                                        }}),
                                                                    }}, "dolore") {{
                                                        crossRegionCopy = new org.openapis.openapi.models.shared.CrossRegionCopyAction[]{{
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "molestiae";
                                                                            }};, "velit") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "occaecati";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 253291L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "quam";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "laborum";
                                                                            }};, "animi") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "error";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 158969L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "vitae";
                                                            }}),
                                                            add(new CrossRegionCopyAction(                new EncryptionConfiguration(false) {{
                                                                                cmkArn = "tenetur";
                                                                            }};, "ipsam") {{
                                                                encryptionConfiguration = new EncryptionConfiguration(false) {{
                                                                    cmkArn = "enim";
                                                                    encrypted = false;
                                                                }};
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 138183L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "sequi";
                                                            }}),
                                                        }};
                                                        name = "Miss Rufus Ankunding";
                                                    }}),
                                                }};
                                                eventSource = new EventSource(EventSourceValuesEnum.MANAGED_CWE) {{
                                                    parameters = new EventParameters("iusto", EventTypeValuesEnum.SHARE_SNAPSHOT,                 new String[]{{
                                                                        add("harum"),
                                                                    }});;
                                                }};;
                                                parameters = new Parameters() {{
                                                    excludeBootVolume = false;
                                                    excludeDataVolumeTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("repudiandae", "quae") {{
                                                            key = "accusamus";
                                                            value = "commodi";
                                                        }}),
                                                        add(new Tag("molestias", "excepturi") {{
                                                            key = "ipsum";
                                                            value = "quidem";
                                                        }}),
                                                    }};
                                                    noReboot = false;
                                                }};;
                                                policyType = PolicyTypeValuesEnum.EVENT_BASED_POLICY;
                                                resourceLocations = new org.openapis.openapi.models.shared.ResourceLocationValuesEnum[]{{
                                                    add(ResourceLocationValuesEnum.OUTPOST),
                                                    add(ResourceLocationValuesEnum.OUTPOST),
                                                }};
                                                resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeValuesEnum[]{{
                                                    add(ResourceTypeValuesEnum.VOLUME),
                                                    add(ResourceTypeValuesEnum.INSTANCE),
                                                    add(ResourceTypeValuesEnum.INSTANCE),
                                                    add(ResourceTypeValuesEnum.VOLUME),
                                                }};
                                                schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                                                    add(new Schedule() {{
                                                        archiveRule = new ArchiveRule(                new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                            count = 647174L;
                                                                                            interval = 716327L;
                                                                                            intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                                        }};);) {{
                                                            retainRule = new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                count = 667411L;
                                                                                interval = 842342L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                            }};) {{
                                                                retentionArchiveTier = new RetentionArchiveTier() {{
                                                                    count = 277718L;
                                                                    interval = 318569L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                            }};
                                                        }};
                                                        copyTags = false;
                                                        createRule = new CreateRule() {{
                                                            cronExpression = "labore";
                                                            interval = 264730L;
                                                            intervalUnit = IntervalUnitValuesEnum.HOURS;
                                                            location = LocationValuesEnum.CLOUD;
                                                            times = new String[]{{
                                                                add("cupiditate"),
                                                                add("quos"),
                                                            }};
                                                        }};
                                                        crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "magni";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 828940L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 4695L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "dolorum";
                                                                targetRegion = "excepturi";
                                                            }}),
                                                        }};
                                                        deprecateRule = new DeprecateRule() {{
                                                            count = 270008L;
                                                            interval = 703737L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                        }};
                                                        fastRestoreRule = new FastRestoreRule(                new String[]{{
                                                                            add("provident"),
                                                                            add("necessitatibus"),
                                                                        }}) {{
                                                            availabilityZones = new String[]{{
                                                                add("delectus"),
                                                                add("eum"),
                                                            }};
                                                            count = 248753L;
                                                            interval = 756107L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                        }};
                                                        name = "Luke Fadel";
                                                        retainRule = new RetainRule() {{
                                                            count = 680056L;
                                                            interval = 447125L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                        }};
                                                        shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                                            add(new ShareRule(                new String[]{{
                                                                                add("laborum"),
                                                                                add("accusamus"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("rerum"),
                                                                    add("dicta"),
                                                                    add("magnam"),
                                                                    add("cumque"),
                                                                }};
                                                                unshareInterval = 813798L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("quidem"),
                                                                                add("provident"),
                                                                                add("nam"),
                                                                                add("id"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("occaecati"),
                                                                }};
                                                                unshareInterval = 313218L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("natus"),
                                                                                add("omnis"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("deleniti"),
                                                                    add("sapiente"),
                                                                    add("amet"),
                                                                }};
                                                                unshareInterval = 643990L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("labore"),
                                                                                add("labore"),
                                                                                add("suscipit"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("perferendis"),
                                                                    add("nihil"),
                                                                }};
                                                                unshareInterval = 301575L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                            }}),
                                                        }};
                                                        tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("vero", "aspernatur") {{
                                                                key = "nobis";
                                                                value = "eum";
                                                            }}),
                                                            add(new Tag("et", "excepturi") {{
                                                                key = "architecto";
                                                                value = "magnam";
                                                            }}),
                                                            add(new Tag("quos", "sint") {{
                                                                key = "ullam";
                                                                value = "provident";
                                                            }}),
                                                        }};
                                                        variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("mollitia", "ad") {{
                                                                key = "mollitia";
                                                                value = "reiciendis";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Schedule() {{
                                                        archiveRule = new ArchiveRule(                new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                            count = 435865L;
                                                                                            interval = 984043L;
                                                                                            intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                                        }};);) {{
                                                            retainRule = new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                count = 141264L;
                                                                                interval = 367562L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                            }};) {{
                                                                retentionArchiveTier = new RetentionArchiveTier() {{
                                                                    count = 431418L;
                                                                    interval = 221262L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                            }};
                                                        }};
                                                        copyTags = false;
                                                        createRule = new CreateRule() {{
                                                            cronExpression = "eius";
                                                            interval = 806194L;
                                                            intervalUnit = IntervalUnitValuesEnum.HOURS;
                                                            location = LocationValuesEnum.OUTPOST_LOCAL;
                                                            times = new String[]{{
                                                                add("in"),
                                                                add("architecto"),
                                                                add("architecto"),
                                                            }};
                                                        }};
                                                        crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "ullam";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 714242L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 998848L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "sed";
                                                                targetRegion = "saepe";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "pariatur";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 37559L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 508315L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "magni";
                                                                targetRegion = "sunt";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "quo";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 848009L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 807319L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                target = "excepturi";
                                                                targetRegion = "odit";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "ea";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 33222L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 982575L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "ipsam";
                                                                targetRegion = "voluptate";
                                                            }}),
                                                        }};
                                                        deprecateRule = new DeprecateRule() {{
                                                            count = 420075L;
                                                            interval = 722056L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                        }};
                                                        fastRestoreRule = new FastRestoreRule(                new String[]{{
                                                                            add("hic"),
                                                                            add("libero"),
                                                                        }}) {{
                                                            availabilityZones = new String[]{{
                                                                add("nemo"),
                                                                add("voluptatibus"),
                                                                add("perferendis"),
                                                                add("fugiat"),
                                                            }};
                                                            count = 230742L;
                                                            interval = 11714L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                        }};
                                                        name = "Ernest Hayes";
                                                        retainRule = new RetainRule() {{
                                                            count = 54338L;
                                                            interval = 338985L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                        }};
                                                        shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                                            add(new ShareRule(                new String[]{{
                                                                                add("vero"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("dolores"),
                                                                }};
                                                                unshareInterval = 793698L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                        }};
                                                        tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("omnis", "facilis") {{
                                                                key = "hic";
                                                                value = "recusandae";
                                                            }}),
                                                            add(new Tag("porro", "consequuntur") {{
                                                                key = "perspiciatis";
                                                                value = "voluptatem";
                                                            }}),
                                                        }};
                                                        variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("occaecati", "rerum") {{
                                                                key = "error";
                                                                value = "eaque";
                                                            }}),
                                                            add(new Tag("earum", "modi") {{
                                                                key = "adipisci";
                                                                value = "asperiores";
                                                            }}),
                                                            add(new Tag("deleniti", "pariatur") {{
                                                                key = "iste";
                                                                value = "dolorum";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Schedule() {{
                                                        archiveRule = new ArchiveRule(                new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                            count = 398221L;
                                                                                            interval = 212390L;
                                                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                                        }};);) {{
                                                            retainRule = new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                count = 964490L;
                                                                                interval = 311945L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                            }};) {{
                                                                retentionArchiveTier = new RetentionArchiveTier() {{
                                                                    count = 589910L;
                                                                    interval = 750844L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                            }};
                                                        }};
                                                        copyTags = false;
                                                        createRule = new CreateRule() {{
                                                            cronExpression = "dolor";
                                                            interval = 186193L;
                                                            intervalUnit = IntervalUnitValuesEnum.HOURS;
                                                            location = LocationValuesEnum.CLOUD;
                                                            times = new String[]{{
                                                                add("excepturi"),
                                                                add("cum"),
                                                                add("voluptate"),
                                                                add("dignissimos"),
                                                            }};
                                                        }};
                                                        crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "amet";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 680545L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 85295L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "ipsa";
                                                                targetRegion = "iure";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "odio";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 311796L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 696344L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                target = "voluptas";
                                                                targetRegion = "natus";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "eos";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 542499L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 854614L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "soluta";
                                                                targetRegion = "dolorum";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "iusto";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 453697L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 536579L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "necessitatibus";
                                                                targetRegion = "distinctio";
                                                            }}),
                                                        }};
                                                        deprecateRule = new DeprecateRule() {{
                                                            count = 990339L;
                                                            interval = 469497L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                        }};
                                                        fastRestoreRule = new FastRestoreRule(                new String[]{{
                                                                            add("optio"),
                                                                        }}) {{
                                                            availabilityZones = new String[]{{
                                                                add("id"),
                                                                add("saepe"),
                                                            }};
                                                            count = 263322L;
                                                            interval = 137220L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                        }};
                                                        name = "Tommy Turner";
                                                        retainRule = new RetainRule() {{
                                                            count = 588317L;
                                                            interval = 324683L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                        }};
                                                        shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                                            add(new ShareRule(                new String[]{{
                                                                                add("officiis"),
                                                                                add("qui"),
                                                                                add("dolorum"),
                                                                                add("a"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("alias"),
                                                                    add("at"),
                                                                    add("quaerat"),
                                                                }};
                                                                unshareInterval = 273542L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("amet"),
                                                                                add("tempore"),
                                                                                add("accusamus"),
                                                                                add("numquam"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("harum"),
                                                                    add("iusto"),
                                                                }};
                                                                unshareInterval = 215507L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("expedita"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("dolorem"),
                                                                    add("sapiente"),
                                                                }};
                                                                unshareInterval = 518201L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                        }};
                                                        tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("libero", "voluptas") {{
                                                                key = "sed";
                                                                value = "vel";
                                                            }}),
                                                        }};
                                                        variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("incidunt", "qui") {{
                                                                key = "quam";
                                                                value = "ipsum";
                                                            }}),
                                                            add(new Tag("pariatur", "soluta") {{
                                                                key = "cupiditate";
                                                                value = "maxime";
                                                            }}),
                                                            add(new Tag("totam", "incidunt") {{
                                                                key = "dicta";
                                                                value = "laborum";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Schedule() {{
                                                        archiveRule = new ArchiveRule(                new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                            count = 565421L;
                                                                                            interval = 840429L;
                                                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                                        }};);) {{
                                                            retainRule = new ArchiveRetainRule(                new RetentionArchiveTier() {{
                                                                                count = 704474L;
                                                                                interval = 396060L;
                                                                                intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                            }};) {{
                                                                retentionArchiveTier = new RetentionArchiveTier() {{
                                                                    count = 132068L;
                                                                    interval = 174909L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                            }};
                                                        }};
                                                        copyTags = false;
                                                        createRule = new CreateRule() {{
                                                            cronExpression = "neque";
                                                            interval = 144847L;
                                                            intervalUnit = IntervalUnitValuesEnum.HOURS;
                                                            location = LocationValuesEnum.CLOUD;
                                                            times = new String[]{{
                                                                add("sunt"),
                                                                add("ullam"),
                                                            }};
                                                        }};
                                                        crossRegionCopyRules = new org.openapis.openapi.models.shared.CrossRegionCopyRule[]{{
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "hic";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 30452L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 746994L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "et";
                                                                targetRegion = "saepe";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "ipsum";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 83422L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 552193L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                                }};
                                                                target = "cupiditate";
                                                                targetRegion = "aperiam";
                                                            }}),
                                                            add(new CrossRegionCopyRule(false) {{
                                                                cmkArn = "delectus";
                                                                copyTags = false;
                                                                deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                                                    interval = 209157L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                                }};
                                                                encrypted = false;
                                                                retainRule = new CrossRegionCopyRetainRule() {{
                                                                    interval = 286915L;
                                                                    intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                                }};
                                                                target = "dolorum";
                                                                targetRegion = "architecto";
                                                            }}),
                                                        }};
                                                        deprecateRule = new DeprecateRule() {{
                                                            count = 63038L;
                                                            interval = 16429L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                        }};
                                                        fastRestoreRule = new FastRestoreRule(                new String[]{{
                                                                            add("qui"),
                                                                            add("quae"),
                                                                            add("laudantium"),
                                                                        }}) {{
                                                            availabilityZones = new String[]{{
                                                                add("consequatur"),
                                                                add("est"),
                                                                add("repellendus"),
                                                                add("porro"),
                                                            }};
                                                            count = 984330L;
                                                            interval = 281730L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.MONTHS;
                                                        }};
                                                        name = "Toni Wolff";
                                                        retainRule = new RetainRule() {{
                                                            count = 606476L;
                                                            interval = 338159L;
                                                            intervalUnit = RetentionIntervalUnitValuesEnum.DAYS;
                                                        }};
                                                        shareRules = new org.openapis.openapi.models.shared.ShareRule[]{{
                                                            add(new ShareRule(                new String[]{{
                                                                                add("distinctio"),
                                                                                add("quod"),
                                                                                add("odio"),
                                                                                add("similique"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("consectetur"),
                                                                    add("vero"),
                                                                }};
                                                                unshareInterval = 949319L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("natus"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("vero"),
                                                                    add("ducimus"),
                                                                    add("dolore"),
                                                                }};
                                                                unshareInterval = 844550L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("doloribus"),
                                                                                add("iusto"),
                                                                                add("eligendi"),
                                                                                add("ducimus"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("aut"),
                                                                    add("voluptatibus"),
                                                                    add("exercitationem"),
                                                                    add("nulla"),
                                                                }};
                                                                unshareInterval = 148141L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.YEARS;
                                                            }}),
                                                            add(new ShareRule(                new String[]{{
                                                                                add("aspernatur"),
                                                                                add("vel"),
                                                                            }}) {{
                                                                targetAccounts = new String[]{{
                                                                    add("officia"),
                                                                }};
                                                                unshareInterval = 269479L;
                                                                unshareIntervalUnit = RetentionIntervalUnitValuesEnum.WEEKS;
                                                            }}),
                                                        }};
                                                        tagsToAdd = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("ex", "laudantium") {{
                                                                key = "magnam";
                                                                value = "ratione";
                                                            }}),
                                                            add(new Tag("maiores", "quasi") {{
                                                                key = "dicta";
                                                                value = "dolor";
                                                            }}),
                                                            add(new Tag("excepturi", "voluptatibus") {{
                                                                key = "ex";
                                                                value = "nulla";
                                                            }}),
                                                            add(new Tag("quisquam", "saepe") {{
                                                                key = "nostrum";
                                                                value = "sapiente";
                                                            }}),
                                                        }};
                                                        variableTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("veniam", "aliquid") {{
                                                                key = "impedit";
                                                                value = "corporis";
                                                            }}),
                                                            add(new Tag("ea", "quo") {{
                                                                key = "inventore";
                                                                value = "magnam";
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                targetTags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("minima", "eaque") {{
                                                        key = "recusandae";
                                                        value = "aspernatur";
                                                    }}),
                                                }};
                                            }};, CreateLifecyclePolicyRequestBodyStateEnum.DISABLED) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aut", "aut");
                                    put("deleniti", "impedit");
                                    put("aliquam", "fugit");
                                }};
                            }};) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "non";
                xAmzDate = "et";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            CreateLifecyclePolicyResponse res = sdk.createLifecyclePolicy(req);

            if (res.createLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->