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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateLifecyclePolicyRequestBody() {{
                    description = "voluptas";
                    executionRoleArn = "fugit";
                    policyDetails = new CreateLifecyclePolicyRequestBodyPolicyDetails() {{
                        actions = new openapisdk.models.shared.Action[]() {{
                            add(new Action() {{
                                crossRegionCopy = new openapisdk.models.shared.CrossRegionCopyAction[]() {{
                                    add(new CrossRegionCopyAction() {{
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            cmkArn = "rerum";
                                            encrypted = false;
                                        }};
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 2518412263346885298;
                                            intervalUnit = "DAYS";
                                        }};
                                        target = "et";
                                    }}),
                                }};
                                name = "ut";
                            }}),
                        }};
                        eventSource = new EventSource() {{
                            parameters = new EventParameters() {{
                                descriptionRegex = "dolorem";
                                eventType = "shareSnapshot";
                                snapshotOwner = new String[]() {{
                                    add("iste"),
                                }};
                            }};
                            type = "MANAGED_CWE";
                        }};
                        parameters = new Parameters() {{
                            excludeBootVolume = true;
                            noReboot = true;
                        }};
                        policyType = "EVENT_BASED_POLICY";
                        resourceLocations = new openapisdk.models.shared.ResourceLocationValuesEnum[]() {{
                            add("CLOUD"),
                        }};
                        resourceTypes = new openapisdk.models.shared.ResourceTypeValuesEnum[]() {{
                            add("INSTANCE"),
                        }};
                        schedules = new openapisdk.models.shared.Schedule[]() {{
                            add(new Schedule() {{
                                copyTags = true;
                                createRule = new CreateRule() {{
                                    cronExpression = "accusantium";
                                    interval = 1395437218309923052;
                                    intervalUnit = "HOURS";
                                    location = "CLOUD";
                                    times = new String[]() {{
                                        add("aut"),
                                        add("odit"),
                                    }};
                                }};
                                crossRegionCopyRules = new openapisdk.models.shared.CrossRegionCopyRule[]() {{
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "voluptas";
                                        copyTags = true;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 1059542851699319360;
                                            intervalUnit = "DAYS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 7845762441295307478;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "consectetur";
                                        targetRegion = "nobis";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "odio";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 388440063886460141;
                                            intervalUnit = "DAYS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 8902041070398994519;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "sint";
                                        targetRegion = "inventore";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "ut";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 4756106358532488297;
                                            intervalUnit = "MONTHS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 2264299874001785192;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "dolor";
                                        targetRegion = "beatae";
                                    }}),
                                }};
                                deprecateRule = new DeprecateRule() {{
                                    count = 4112921325496946042;
                                    interval = 2671030200101705776;
                                    intervalUnit = "WEEKS";
                                }};
                                fastRestoreRule = new FastRestoreRule() {{
                                    availabilityZones = new String[]() {{
                                        add("ipsum"),
                                        add("ex"),
                                    }};
                                    count = 7014402135919778893;
                                    interval = 3983722386484812742;
                                    intervalUnit = "MONTHS";
                                }};
                                name = "rerum";
                                retainRule = new RetainRule() {{
                                    count = 8489437897698681073;
                                    interval = 1938800996802160635;
                                    intervalUnit = "YEARS";
                                }};
                                shareRules = new openapisdk.models.shared.ShareRule[]() {{
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]() {{
                                            add("qui"),
                                        }};
                                        unshareInterval = 4308690457412179793;
                                        unshareIntervalUnit = "YEARS";
                                    }}),
                                }};
                                tagsToAdd = new openapisdk.models.shared.Tag[]() {{
                                    add(new Tag() {{
                                        key = "qui";
                                        value = "ut";
                                    }}),
                                    add(new Tag() {{
                                        key = "itaque";
                                        value = "ab";
                                    }}),
                                }};
                                variableTags = new openapisdk.models.shared.Tag[]() {{
                                    add(new Tag() {{
                                        key = "ullam";
                                        value = "et";
                                    }}),
                                }};
                            }}),
                            add(new Schedule() {{
                                copyTags = false;
                                createRule = new CreateRule() {{
                                    cronExpression = "esse";
                                    interval = 5902760509050140210;
                                    intervalUnit = "HOURS";
                                    location = "OUTPOST_LOCAL";
                                    times = new String[]() {{
                                        add("soluta"),
                                        add("sunt"),
                                    }};
                                }};
                                crossRegionCopyRules = new openapisdk.models.shared.CrossRegionCopyRule[]() {{
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "magni";
                                        copyTags = false;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 6651829488660799814;
                                            intervalUnit = "MONTHS";
                                        }};
                                        encrypted = true;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 4391202566038595699;
                                            intervalUnit = "MONTHS";
                                        }};
                                        target = "ut";
                                        targetRegion = "consequatur";
                                    }}),
                                    add(new CrossRegionCopyRule() {{
                                        cmkArn = "dolor";
                                        copyTags = true;
                                        deprecateRule = new CrossRegionCopyDeprecateRule() {{
                                            interval = 1925401661646756611;
                                            intervalUnit = "YEARS";
                                        }};
                                        encrypted = false;
                                        retainRule = new CrossRegionCopyRetainRule() {{
                                            interval = 2803285039048912676;
                                            intervalUnit = "YEARS";
                                        }};
                                        target = "laboriosam";
                                        targetRegion = "sed";
                                    }}),
                                }};
                                deprecateRule = new DeprecateRule() {{
                                    count = 6604365855503062775;
                                    interval = 1836598054518427835;
                                    intervalUnit = "DAYS";
                                }};
                                fastRestoreRule = new FastRestoreRule() {{
                                    availabilityZones = new String[]() {{
                                        add("consequuntur"),
                                        add("laudantium"),
                                        add("autem"),
                                    }};
                                    count = 1891001667378689416;
                                    interval = 1627381309359808899;
                                    intervalUnit = "DAYS";
                                }};
                                name = "perferendis";
                                retainRule = new RetainRule() {{
                                    count = 8497925768463229012;
                                    interval = 5311927246208705713;
                                    intervalUnit = "YEARS";
                                }};
                                shareRules = new openapisdk.models.shared.ShareRule[]() {{
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]() {{
                                            add("maxime"),
                                        }};
                                        unshareInterval = 8392001091488039958;
                                        unshareIntervalUnit = "WEEKS";
                                    }}),
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]() {{
                                            add("rerum"),
                                        }};
                                        unshareInterval = 6394356307858046544;
                                        unshareIntervalUnit = "WEEKS";
                                    }}),
                                    add(new ShareRule() {{
                                        targetAccounts = new String[]() {{
                                            add("minima"),
                                            add("necessitatibus"),
                                        }};
                                        unshareInterval = 9205243623417456715;
                                        unshareIntervalUnit = "DAYS";
                                    }}),
                                }};
                                tagsToAdd = new openapisdk.models.shared.Tag[]() {{
                                    add(new Tag() {{
                                        key = "labore";
                                        value = "et";
                                    }}),
                                }};
                                variableTags = new openapisdk.models.shared.Tag[]() {{
                                    add(new Tag() {{
                                        key = "ad";
                                        value = "expedita";
                                    }}),
                                    add(new Tag() {{
                                        key = "vel";
                                        value = "qui";
                                    }}),
                                }};
                            }}),
                        }};
                        targetTags = new openapisdk.models.shared.Tag[]() {{
                            add(new Tag() {{
                                key = "nihil";
                                value = "tempora";
                            }}),
                            add(new Tag() {{
                                key = "deserunt";
                                value = "eaque";
                            }}),
                        }};
                    }};
                    state = "ENABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("autem", "quis");
                        put("vel", "vel");
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