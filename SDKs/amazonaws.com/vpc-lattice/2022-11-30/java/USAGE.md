<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateRuleRequest;
import org.openapis.openapi.models.operations.BatchUpdateRuleRequestBody;
import org.openapis.openapi.models.operations.BatchUpdateRuleResponse;
import org.openapis.openapi.models.shared.FixedResponseAction;
import org.openapis.openapi.models.shared.ForwardAction;
import org.openapis.openapi.models.shared.HeaderMatch;
import org.openapis.openapi.models.shared.HeaderMatchType;
import org.openapis.openapi.models.shared.HttpMatch;
import org.openapis.openapi.models.shared.PathMatch;
import org.openapis.openapi.models.shared.PathMatchType;
import org.openapis.openapi.models.shared.RuleAction;
import org.openapis.openapi.models.shared.RuleMatch;
import org.openapis.openapi.models.shared.RuleUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTargetGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateRuleRequest req = new BatchUpdateRuleRequest(                new BatchUpdateRuleRequestBody(                new org.openapis.openapi.models.shared.RuleUpdate[]{{
                                                add(new RuleUpdate("saepe") {{
                                                    action = new RuleAction() {{
                                                        fixedResponse = new FixedResponseAction(844266L) {{
                                                            statusCode = 715190L;
                                                        }};
                                                        forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                            add(new WeightedTargetGroup("tempora") {{
                                                                                targetGroupIdentifier = "ipsa";
                                                                                weight = 963663L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("minus") {{
                                                                                targetGroupIdentifier = "suscipit";
                                                                                weight = 477665L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("iusto") {{
                                                                                targetGroupIdentifier = "placeat";
                                                                                weight = 528895L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("recusandae") {{
                                                                                targetGroupIdentifier = "excepturi";
                                                                                weight = 392785L;
                                                                            }}),
                                                                        }}) {{
                                                            targetGroups = new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                add(new WeightedTargetGroup("illum") {{
                                                                    targetGroupIdentifier = "nulla";
                                                                    weight = 544883L;
                                                                }}),
                                                                add(new WeightedTargetGroup("deserunt") {{
                                                                    targetGroupIdentifier = "vel";
                                                                    weight = 623564L;
                                                                }}),
                                                                add(new WeightedTargetGroup("magnam") {{
                                                                    targetGroupIdentifier = "suscipit";
                                                                    weight = 437587L;
                                                                }}),
                                                            }};
                                                        }};
                                                    }};
                                                    match = new RuleMatch() {{
                                                        httpMatch = new HttpMatch() {{
                                                            headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "quo";
                                                                                    exact = "odit";
                                                                                    prefix = "at";
                                                                                }};, "at") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "ab";
                                                                        exact = "quis";
                                                                        prefix = "veritatis";
                                                                    }};
                                                                    name = "Christopher Hills";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "dicta";
                                                                                    exact = "nam";
                                                                                    prefix = "officia";
                                                                                }};, "occaecati") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "maiores";
                                                                        exact = "molestiae";
                                                                        prefix = "quod";
                                                                    }};
                                                                    name = "Erik Lebsack";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "modi";
                                                                                    exact = "qui";
                                                                                    prefix = "impedit";
                                                                                }};, "cum") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "fugit";
                                                                        exact = "deleniti";
                                                                        prefix = "hic";
                                                                    }};
                                                                    name = "Everett Breitenberg";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "iste";
                                                                                    exact = "dolor";
                                                                                    prefix = "natus";
                                                                                }};, "laboriosam") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "esse";
                                                                        exact = "ipsum";
                                                                        prefix = "excepturi";
                                                                    }};
                                                                    name = "Dorothy Hane";
                                                                }}),
                                                            }};
                                                            method = "hic";
                                                            pathMatch = new PathMatch(                new PathMatchType() {{
                                                                                exact = "in";
                                                                                prefix = "corporis";
                                                                            }};) {{
                                                                caseSensitive = false;
                                                                match = new PathMatchType() {{
                                                                    exact = "saepe";
                                                                    prefix = "fuga";
                                                                }};
                                                            }};
                                                        }};
                                                    }};
                                                    priority = 613064L;
                                                    ruleIdentifier = "iure";
                                                }}),
                                                add(new RuleUpdate("voluptatibus") {{
                                                    action = new RuleAction() {{
                                                        fixedResponse = new FixedResponseAction(99280L) {{
                                                            statusCode = 697631L;
                                                        }};
                                                        forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                            add(new WeightedTargetGroup("corporis") {{
                                                                                targetGroupIdentifier = "dolores";
                                                                                weight = 210382L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("enim") {{
                                                                                targetGroupIdentifier = "explicabo";
                                                                                weight = 750686L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("minima") {{
                                                                                targetGroupIdentifier = "omnis";
                                                                                weight = 363711L;
                                                                            }}),
                                                                        }}) {{
                                                            targetGroups = new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                add(new WeightedTargetGroup("mollitia") {{
                                                                    targetGroupIdentifier = "reiciendis";
                                                                    weight = 666767L;
                                                                }}),
                                                            }};
                                                        }};
                                                    }};
                                                    match = new RuleMatch() {{
                                                        httpMatch = new HttpMatch() {{
                                                            headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "culpa";
                                                                                    exact = "consequuntur";
                                                                                    prefix = "repellat";
                                                                                }};, "mollitia") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "accusantium";
                                                                        exact = "iure";
                                                                        prefix = "culpa";
                                                                    }};
                                                                    name = "Darrin Brakus";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "quis";
                                                                                    exact = "vitae";
                                                                                    prefix = "laborum";
                                                                                }};, "animi") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "occaecati";
                                                                        exact = "numquam";
                                                                        prefix = "commodi";
                                                                    }};
                                                                    name = "Nellie Frami";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "aut";
                                                                                    exact = "quasi";
                                                                                    prefix = "error";
                                                                                }};, "temporibus") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "enim";
                                                                        exact = "odit";
                                                                        prefix = "quo";
                                                                    }};
                                                                    name = "Mandy Hills";
                                                                }}),
                                                            }};
                                                            method = "laborum";
                                                            pathMatch = new PathMatch(                new PathMatchType() {{
                                                                                exact = "voluptatibus";
                                                                                prefix = "vero";
                                                                            }};) {{
                                                                caseSensitive = false;
                                                                match = new PathMatchType() {{
                                                                    exact = "quasi";
                                                                    prefix = "reiciendis";
                                                                }};
                                                            }};
                                                        }};
                                                    }};
                                                    priority = 468651L;
                                                    ruleIdentifier = "praesentium";
                                                }}),
                                                add(new RuleUpdate("itaque") {{
                                                    action = new RuleAction() {{
                                                        fixedResponse = new FixedResponseAction(604846L) {{
                                                            statusCode = 55714L;
                                                        }};
                                                        forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                            add(new WeightedTargetGroup("iusto") {{
                                                                                targetGroupIdentifier = "corporis";
                                                                                weight = 296140L;
                                                                            }}),
                                                                        }}) {{
                                                            targetGroups = new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                add(new WeightedTargetGroup("doloremque") {{
                                                                    targetGroupIdentifier = "cum";
                                                                    weight = 19987L;
                                                                }}),
                                                                add(new WeightedTargetGroup("maiores") {{
                                                                    targetGroupIdentifier = "reprehenderit";
                                                                    weight = 282807L;
                                                                }}),
                                                            }};
                                                        }};
                                                    }};
                                                    match = new RuleMatch() {{
                                                        httpMatch = new HttpMatch() {{
                                                            headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "molestias";
                                                                                    exact = "excepturi";
                                                                                    prefix = "pariatur";
                                                                                }};, "modi") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "harum";
                                                                        exact = "enim";
                                                                        prefix = "accusamus";
                                                                    }};
                                                                    name = "Elvira Bergnaum";
                                                                }}),
                                                            }};
                                                            method = "praesentium";
                                                            pathMatch = new PathMatch(                new PathMatchType() {{
                                                                                exact = "quasi";
                                                                                prefix = "repudiandae";
                                                                            }};) {{
                                                                caseSensitive = false;
                                                                match = new PathMatchType() {{
                                                                    exact = "rem";
                                                                    prefix = "voluptates";
                                                                }};
                                                            }};
                                                        }};
                                                    }};
                                                    priority = 575947L;
                                                    ruleIdentifier = "veritatis";
                                                }}),
                                            }});, "incidunt", "enim") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            BatchUpdateRuleResponse res = sdk.batchUpdateRule(req);

            if (res.batchUpdateRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->