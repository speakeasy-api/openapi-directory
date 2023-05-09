# codeReferences

## Overview

With this endpoint you can upload Feature Flag and Setting usage references that will be shown on the ConfigCat Dashboard.

<a href="https://configcat.com/docs/advanced/code-references/overview/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Code References.

### Available Operations

* [postV1CodeReferences](#postv1codereferences)
* [postV1CodeReferencesDeleteReports](#postv1codereferencesdeletereports)

## postV1CodeReferences

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1CodeReferencesResponse;
import org.openapis.openapi.models.shared.CodeReferenceRequest;
import org.openapis.openapi.models.shared.FlagReference;
import org.openapis.openapi.models.shared.ReferenceLine;
import org.openapis.openapi.models.shared.ReferenceLines;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "rerum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CodeReferenceRequest req = new CodeReferenceRequest("adipisci", "fe49a8d9-cbf4-4863-b323-f9b77f3a4100", "iure") {{
                activeBranches = new String[]{{
                    add("quaerat"),
                    add("accusamus"),
                }};
                commitHash = "quidem";
                commitUrl = "voluptatibus";
                flagReferences = new org.openapis.openapi.models.shared.FlagReference[]{{
                    add(new FlagReference(                new org.openapis.openapi.models.shared.ReferenceLines[]{{
                                        add(new ReferenceLines("temporibus",                 new ReferenceLine(183280) {{
                                                            lineText = "neque";
                                                        }};) {{
                                            file = "pariatur";
                                            fileUrl = "soluta";
                                            postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(276894) {{
                                                    lineNumber = 674848;
                                                    lineText = "totam";
                                                }}),
                                            }};
                                            preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(704474) {{
                                                    lineNumber = 174909;
                                                    lineText = "distinctio";
                                                }}),
                                            }};
                                            referenceLine = new ReferenceLine(565421) {{
                                                lineNumber = 396060;
                                                lineText = "quam";
                                            }};
                                        }}),
                                        add(new ReferenceLines("dolore",                 new ReferenceLine(286915) {{
                                                            lineText = "adipisci";
                                                        }};) {{
                                            file = "fugit";
                                            fileUrl = "magni";
                                            postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(722081) {{
                                                    lineNumber = 124833;
                                                    lineText = "ullam";
                                                }}),
                                                add(new ReferenceLine(765326) {{
                                                    lineNumber = 940432;
                                                    lineText = "voluptatem";
                                                }}),
                                            }};
                                            preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(903720) {{
                                                    lineNumber = 748664;
                                                    lineText = "et";
                                                }}),
                                                add(new ReferenceLine(749255) {{
                                                    lineNumber = 217450;
                                                    lineText = "veritatis";
                                                }}),
                                                add(new ReferenceLine(584476) {{
                                                    lineNumber = 552193;
                                                    lineText = "tempore";
                                                }}),
                                            }};
                                            referenceLine = new ReferenceLine(209157) {{
                                                lineNumber = 45614;
                                                lineText = "delectus";
                                            }};
                                        }}),
                                        add(new ReferenceLines("cupiditate",                 new ReferenceLine(181631) {{
                                                            lineText = "quae";
                                                        }};) {{
                                            file = "dolorum";
                                            fileUrl = "architecto";
                                            postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(929530) {{
                                                    lineNumber = 16429;
                                                    lineText = "quas";
                                                }}),
                                            }};
                                            preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(785153) {{
                                                    lineNumber = 669917;
                                                    lineText = "repellendus";
                                                }}),
                                            }};
                                            referenceLine = new ReferenceLine(703495) {{
                                                lineNumber = 984330;
                                                lineText = "ut";
                                            }};
                                        }}),
                                        add(new ReferenceLines("impedit",                 new ReferenceLine(13236) {{
                                                            lineText = "voluptatibus";
                                                        }};) {{
                                            file = "laudantium";
                                            fileUrl = "odio";
                                            postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(876506) {{
                                                    lineNumber = 977496;
                                                    lineText = "quisquam";
                                                }}),
                                                add(new ReferenceLine(218403) {{
                                                    lineNumber = 606476;
                                                    lineText = "quis";
                                                }}),
                                                add(new ReferenceLine(231701) {{
                                                    lineNumber = 961571;
                                                    lineText = "voluptate";
                                                }}),
                                            }};
                                            preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(941378) {{
                                                    lineNumber = 949319;
                                                    lineText = "dignissimos";
                                                }}),
                                                add(new ReferenceLine(486160) {{
                                                    lineNumber = 715561;
                                                    lineText = "quod";
                                                }}),
                                                add(new ReferenceLine(874288) {{
                                                    lineNumber = 630448;
                                                    lineText = "facilis";
                                                }}),
                                                add(new ReferenceLine(844550) {{
                                                    lineNumber = 498140;
                                                    lineText = "dolore";
                                                }}),
                                            }};
                                            referenceLine = new ReferenceLine(617877) {{
                                                lineNumber = 848944;
                                                lineText = "sequi";
                                            }};
                                        }}),
                                    }}, 347233) {{
                        references = new org.openapis.openapi.models.shared.ReferenceLines[]{{
                            add(new ReferenceLines("saepe",                 new ReferenceLine(263322) {{
                                                lineText = "aspernatur";
                                            }};) {{
                                file = "eos";
                                fileUrl = "atque";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(743835) {{
                                        lineNumber = 854614;
                                        lineText = "ab";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(677082) {{
                                        lineNumber = 478596;
                                        lineText = "voluptate";
                                    }}),
                                    add(new ReferenceLine(896672) {{
                                        lineNumber = 536579;
                                        lineText = "omnis";
                                    }}),
                                    add(new ReferenceLine(469497) {{
                                        lineNumber = 714697;
                                        lineText = "asperiores";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(663078) {{
                                    lineNumber = 216897;
                                    lineText = "voluptate";
                                }};
                            }}),
                            add(new ReferenceLines("iusto",                 new ReferenceLine(215507) {{
                                                lineText = "quisquam";
                                            }};) {{
                                file = "perferendis";
                                fileUrl = "amet";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(904425) {{
                                        lineNumber = 881586;
                                        lineText = "ad";
                                    }}),
                                    add(new ReferenceLine(588317) {{
                                        lineNumber = 383464;
                                        lineText = "deserunt";
                                    }}),
                                    add(new ReferenceLine(519711) {{
                                        lineNumber = 324683;
                                        lineText = "repellendus";
                                    }}),
                                    add(new ReferenceLine(872651) {{
                                        lineNumber = 628982;
                                        lineText = "alias";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(798047) {{
                                        lineNumber = 273542;
                                        lineText = "vel";
                                    }}),
                                    add(new ReferenceLine(679880) {{
                                        lineNumber = 885338;
                                        lineText = "qui";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(687488) {{
                                    lineNumber = 952792;
                                    lineText = "esse";
                                }};
                            }}),
                            add(new ReferenceLines("ipsum",                 new ReferenceLine(277628) {{
                                                lineText = "qui";
                                            }};) {{
                                file = "tenetur";
                                fileUrl = "amet";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(313692) {{
                                        lineNumber = 880298;
                                        lineText = "numquam";
                                    }}),
                                    add(new ReferenceLine(518201) {{
                                        lineNumber = 213312;
                                        lineText = "sapiente";
                                    }}),
                                    add(new ReferenceLine(711584) {{
                                        lineNumber = 471752;
                                        lineText = "sit";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(730442) {{
                                        lineNumber = 153694;
                                        lineText = "vel";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(463575) {{
                                    lineNumber = 374170;
                                    lineText = "deserunt";
                                }};
                            }}),
                        }};
                        settingId = 586784;
                    }}),
                    add(new FlagReference(                new org.openapis.openapi.models.shared.ReferenceLines[]{{
                                        add(new ReferenceLines("quod",                 new ReferenceLine(490819) {{
                                                            lineText = "inventore";
                                                        }};) {{
                                            file = "ab";
                                            fileUrl = "cupiditate";
                                            postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(370853) {{
                                                    lineNumber = 272822;
                                                    lineText = "debitis";
                                                }}),
                                            }};
                                            preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(459856) {{
                                                    lineNumber = 197054;
                                                    lineText = "quo";
                                                }}),
                                            }};
                                            referenceLine = new ReferenceLine(715179) {{
                                                lineNumber = 925164;
                                                lineText = "aperiam";
                                            }};
                                        }}),
                                        add(new ReferenceLines("consequuntur",                 new ReferenceLine(187131) {{
                                                            lineText = "explicabo";
                                                        }};) {{
                                            file = "nihil";
                                            fileUrl = "totam";
                                            postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(577543) {{
                                                    lineNumber = 306810;
                                                    lineText = "odio";
                                                }}),
                                                add(new ReferenceLine(174112) {{
                                                    lineNumber = 414567;
                                                    lineText = "sapiente";
                                                }}),
                                                add(new ReferenceLine(35362) {{
                                                    lineNumber = 645570;
                                                    lineText = "molestiae";
                                                }}),
                                                add(new ReferenceLine(556429) {{
                                                    lineNumber = 783648;
                                                    lineText = "eum";
                                                }}),
                                            }};
                                            preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                                add(new ReferenceLine(143829) {{
                                                    lineNumber = 159867;
                                                    lineText = "deleniti";
                                                }}),
                                                add(new ReferenceLine(277596) {{
                                                    lineNumber = 681393;
                                                    lineText = "mollitia";
                                                }}),
                                                add(new ReferenceLine(325685) {{
                                                    lineNumber = 539224;
                                                    lineText = "explicabo";
                                                }}),
                                            }};
                                            referenceLine = new ReferenceLine(956406) {{
                                                lineNumber = 392676;
                                                lineText = "fugit";
                                            }};
                                        }}),
                                    }}, 903984) {{
                        references = new org.openapis.openapi.models.shared.ReferenceLines[]{{
                            add(new ReferenceLines("excepturi",                 new ReferenceLine(972920) {{
                                                lineText = "nostrum";
                                            }};) {{
                                file = "fugit";
                                fileUrl = "porro";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(753570) {{
                                        lineNumber = 985033;
                                        lineText = "iusto";
                                    }}),
                                    add(new ReferenceLine(639473) {{
                                        lineNumber = 497391;
                                        lineText = "alias";
                                    }}),
                                    add(new ReferenceLine(410492) {{
                                        lineNumber = 269479;
                                        lineText = "ipsam";
                                    }}),
                                    add(new ReferenceLine(822118) {{
                                        lineNumber = 136900;
                                        lineText = "vel";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(511319) {{
                                        lineNumber = 189848;
                                        lineText = "ex";
                                    }}),
                                    add(new ReferenceLine(980700) {{
                                        lineNumber = 120657;
                                        lineText = "dolor";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(862192) {{
                                    lineNumber = 97844;
                                    lineText = "ex";
                                }};
                            }}),
                            add(new ReferenceLines("accusamus",                 new ReferenceLine(79522) {{
                                                lineText = "non";
                                            }};) {{
                                file = "sapiente";
                                fileUrl = "quisquam";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(359271) {{
                                        lineNumber = 411372;
                                        lineText = "impedit";
                                    }}),
                                    add(new ReferenceLine(81101) {{
                                        lineNumber = 333145;
                                        lineText = "aliquid";
                                    }}),
                                    add(new ReferenceLine(775220) {{
                                        lineNumber = 301831;
                                        lineText = "ea";
                                    }}),
                                    add(new ReferenceLine(132487) {{
                                        lineNumber = 232234;
                                        lineText = "recusandae";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(725595) {{
                                        lineNumber = 53427;
                                        lineText = "a";
                                    }}),
                                    add(new ReferenceLine(533466) {{
                                        lineNumber = 13948;
                                        lineText = "aut";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(146946) {{
                                    lineNumber = 770581;
                                    lineText = "aliquam";
                                }};
                            }}),
                            add(new ReferenceLines("rem",                 new ReferenceLine(683282) {{
                                                lineText = "reprehenderit";
                                            }};) {{
                                file = "et";
                                fileUrl = "dolorum";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(432148) {{
                                        lineNumber = 810424;
                                        lineText = "velit";
                                    }}),
                                    add(new ReferenceLine(557369) {{
                                        lineNumber = 420539;
                                        lineText = "nobis";
                                    }}),
                                    add(new ReferenceLine(379034) {{
                                        lineNumber = 829603;
                                        lineText = "nulla";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(256139) {{
                                        lineNumber = 96549;
                                        lineText = "tempora";
                                    }}),
                                    add(new ReferenceLine(55374) {{
                                        lineNumber = 131482;
                                        lineText = "provident";
                                    }}),
                                    add(new ReferenceLine(487935) {{
                                        lineNumber = 476477;
                                        lineText = "magnam";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(456141) {{
                                    lineNumber = 262118;
                                    lineText = "esse";
                                }};
                            }}),
                            add(new ReferenceLines("quo",                 new ReferenceLine(681359) {{
                                                lineText = "eius";
                                            }};) {{
                                file = "quidem";
                                fileUrl = "fugiat";
                                postLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(826871) {{
                                        lineNumber = 433439;
                                        lineText = "suscipit";
                                    }}),
                                    add(new ReferenceLine(788546) {{
                                        lineNumber = 181151;
                                        lineText = "praesentium";
                                    }}),
                                }};
                                preLines = new org.openapis.openapi.models.shared.ReferenceLine[]{{
                                    add(new ReferenceLine(696997) {{
                                        lineNumber = 56848;
                                        lineText = "id";
                                    }}),
                                }};
                                referenceLine = new ReferenceLine(847276) {{
                                    lineNumber = 206594;
                                    lineText = "quo";
                                }};
                            }}),
                        }};
                        settingId = 178367;
                    }}),
                }};
                uploader = "occaecati";
            }};            

            PostV1CodeReferencesResponse res = sdk.codeReferences.postV1CodeReferences(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV1CodeReferencesDeleteReports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1CodeReferencesDeleteReportsResponse;
import org.openapis.openapi.models.shared.DeleteRepositoryReportsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DeleteRepositoryReportsRequest req = new DeleteRepositoryReportsRequest("7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37", "blanditiis") {{
                branch = "provident";
                settingId = 953722;
            }};            

            PostV1CodeReferencesDeleteReportsResponse res = sdk.codeReferences.postV1CodeReferencesDeleteReports(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
