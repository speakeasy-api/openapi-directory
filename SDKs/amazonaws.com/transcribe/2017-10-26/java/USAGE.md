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

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest() {{
                headers = new CreateCallAnalyticsCategoryHeaders() {{
                    xAmzAlgorithm = "dolorem";
                    xAmzContentSha256 = "quos";
                    xAmzCredential = "deleniti";
                    xAmzDate = "commodi";
                    xAmzSecurityToken = "nobis";
                    xAmzSignature = "ea";
                    xAmzSignedHeaders = "aspernatur";
                    xAmzTarget = "Transcribe.CreateCallAnalyticsCategory";
                }};
                request = new CreateCallAnalyticsCategoryRequest() {{
                    categoryName = "et";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 6415833391072357588;
                                    first = 3572998533988533354;
                                    last = 186115592639377320;
                                    startTime = 8371597839286912540;
                                }};
                                negate = true;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 1737084578504854227;
                                    first = 4072567731903858704;
                                    last = 4237085410032209086;
                                    startPercentage = 3111927870552615307;
                                }};
                                threshold = 5810679218075794205;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 4375415044152406675;
                                    first = 6065226614949015610;
                                    last = 5255522860651016346;
                                    startTime = 4904486519077315581;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 8950864482110226516;
                                    first = 635778494545269976;
                                    last = 732909964824197774;
                                    startPercentage = 3574948044123775516;
                                }};
                                threshold = 8837983961987368305;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 5910514474348776200;
                                    first = 6822908827298521697;
                                    last = 6724775564262686261;
                                    startTime = 448293307772452745;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 5824651986652714030;
                                    first = 6131616903038811778;
                                    last = 4594817126626365342;
                                    startPercentage = 5909463814165818777;
                                }};
                                sentiments = new openapisdk.models.shared.SentimentValueEnum[]() {{
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 4757942231363494366;
                                    first = 6398098165847865044;
                                    last = 8555143277468378870;
                                    startTime = 2953219465361743600;
                                }};
                                negate = true;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 9094254215425192755;
                                    first = 8700678006278600136;
                                    last = 4987874047483574799;
                                    startPercentage = 1867551380647168719;
                                }};
                                targets = new String[]() {{
                                    add("voluptas"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 1354945883733857766;
                                    first = 2429851522834465117;
                                    last = 4014337987995578881;
                                    startTime = 2407209082118264778;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 8059088005692139324;
                                    first = 1616693811299928439;
                                    last = 6166181411057100347;
                                    startPercentage = 7028536834256048015;
                                }};
                                threshold = 1174564792239911455;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 2323166218679581466;
                                    first = 7469748512072958204;
                                    last = 7765873993746785792;
                                    startTime = 7182270801018086339;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3252394919724459204;
                                    first = 4839093639110720179;
                                    last = 6513358929122907454;
                                    startPercentage = 7230693517838244503;
                                }};
                                threshold = 6854478643425791986;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 4432917687975454065;
                                    first = 3838103805727716046;
                                    last = 5088282042390589507;
                                    startTime = 7067021397838106794;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 6950814023290779017;
                                    first = 2685439770505515950;
                                    last = 301785877603363027;
                                    startPercentage = 3728036883544637968;
                                }};
                                sentiments = new openapisdk.models.shared.SentimentValueEnum[]() {{
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 1058936719184805791;
                                    first = 9128763404757230253;
                                    last = 8358558923616582182;
                                    startTime = 6209843430664353487;
                                }};
                                negate = true;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 777632575137638028;
                                    first = 1039248335667233226;
                                    last = 1768953860407738737;
                                    startPercentage = 2732151556483902484;
                                }};
                                targets = new String[]() {{
                                    add("alias"),
                                    add("id"),
                                    add("in"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 8981508418491254011;
                                    first = 2670592554296272629;
                                    last = 4609291726380021962;
                                    startTime = 2838559931627351935;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3011457315831140961;
                                    first = 7813841376088152101;
                                    last = 5646368466189309592;
                                    startPercentage = 7279099440217309754;
                                }};
                                threshold = 8291728496659502847;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 3616220076055127616;
                                    first = 1889402167586546675;
                                    last = 6631662835676981989;
                                    startTime = 2489959074308973683;
                                }};
                                negate = true;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3935710304177491303;
                                    first = 3594503320079042333;
                                    last = 5067957230603510300;
                                    startPercentage = 4613481507084047686;
                                }};
                                threshold = 8645490517459002672;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 6183506943487606482;
                                    first = 7653920585589605553;
                                    last = 6151577229671946683;
                                    startTime = 26606651514557410;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3166852158880406779;
                                    first = 927782600915074395;
                                    last = 2541103059884869503;
                                    startPercentage = 9089901266438170756;
                                }};
                                sentiments = new openapisdk.models.shared.SentimentValueEnum[]() {{
                                    add("POSITIVE"),
                                    add("NEGATIVE"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 6741667782486366789;
                                    first = 2142001216773853386;
                                    last = 58572451421529771;
                                    startTime = 8036607006448114164;
                                }};
                                negate = true;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3450701776215534863;
                                    first = 5317553351886277283;
                                    last = 3848007284071124204;
                                    startPercentage = 8598532481109664405;
                                }};
                                targets = new String[]() {{
                                    add("non"),
                                    add("rerum"),
                                    add("repellat"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                    }};
                }};
            }};

            CreateCallAnalyticsCategoryResponse res = sdk.createCallAnalyticsCategory(req);

            if (res.createCallAnalyticsCategoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->