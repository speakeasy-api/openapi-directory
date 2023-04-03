<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.shared.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.TranscriptFilter;
import org.openapis.openapi.models.shared.TranscriptFilterTypeEnum;
import org.openapis.openapi.models.shared.RelativeTimeRange;
import org.openapis.openapi.models.shared.ParticipantRoleEnum;
import org.openapis.openapi.models.shared.AbsoluteTimeRange;
import org.openapis.openapi.models.shared.SentimentFilter;
import org.openapis.openapi.models.shared.SentimentValueEnum;
import org.openapis.openapi.models.shared.NonTalkTimeFilter;
import org.openapis.openapi.models.shared.InterruptionFilter;
import org.openapis.openapi.models.shared.InputTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest() {{
                createCallAnalyticsCategoryRequest = new CreateCallAnalyticsCategoryRequest() {{
                    categoryName = "corrupti";
                    inputType = "POST_CALL";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 844266;
                                    first = 602763;
                                    last = 857946;
                                    startTime = 544883;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 423655;
                                    first = 623564;
                                    last = 645894;
                                    startPercentage = 384382;
                                }};
                                threshold = 437587;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 297534;
                                    first = 891773;
                                    last = 56713;
                                    startTime = 963663;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 272656;
                                    first = 383441;
                                    last = 477665;
                                    startPercentage = 791725;
                                }};
                                threshold = 812169;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 528895;
                                    first = 479977;
                                    last = 568045;
                                    startTime = 392785;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 836079;
                                    first = 71036;
                                    last = 337396;
                                    startPercentage = 87129;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("POSITIVE"),
                                    add("NEGATIVE"),
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 957156;
                                    first = 778157;
                                    last = 140350;
                                    startTime = 870013;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 978619;
                                    first = 473608;
                                    last = 799159;
                                    startPercentage = 800911;
                                }};
                                targets = new String[]{{
                                    add("totam"),
                                    add("porro"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 678880;
                                    first = 118274;
                                    last = 720633;
                                    startTime = 639921;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 143353;
                                    first = 537373;
                                    last = 944669;
                                    startPercentage = 758616;
                                }};
                                threshold = 521848;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 105907;
                                    first = 414662;
                                    last = 473600;
                                    startTime = 264555;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 186332;
                                    first = 774234;
                                    last = 736918;
                                    startPercentage = 456150;
                                }};
                                threshold = 216550;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 568434;
                                    first = 135218;
                                    last = 18789;
                                    startTime = 324141;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 149675;
                                    first = 612096;
                                    last = 222321;
                                    startPercentage = 616934;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("MIXED"),
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 681820;
                                    first = 449950;
                                    last = 359508;
                                    startTime = 613064;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 902349;
                                    first = 697631;
                                    last = 99280;
                                    startPercentage = 60225;
                                }};
                                targets = new String[]{{
                                    add("est"),
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 210382;
                                    first = 358152;
                                    last = 128926;
                                    startTime = 750686;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 607831;
                                    first = 363711;
                                    last = 325047;
                                    startPercentage = 570197;
                                }};
                                threshold = 38425;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 438601;
                                    first = 634274;
                                    last = 988374;
                                    startTime = 958950;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 102044;
                                    first = 652790;
                                    last = 208876;
                                    startPercentage = 635059;
                                }};
                                threshold = 161309;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 995300;
                                    first = 653108;
                                    last = 581850;
                                    startTime = 253291;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 466311;
                                    first = 474697;
                                    last = 244425;
                                    startPercentage = 623510;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("NEGATIVE"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 110375;
                                    first = 674752;
                                    last = 656330;
                                    startTime = 317202;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 778346;
                                    first = 196582;
                                    last = 949572;
                                    startPercentage = 368725;
                                }};
                                targets = new String[]{{
                                    add("possimus"),
                                    add("aut"),
                                    add("quasi"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
                xAmzTarget = "Transcribe.CreateCallAnalyticsCategory";
            }}            

            CreateCallAnalyticsCategoryResponse res = sdk.createCallAnalyticsCategory(req);

            if (res.createCallAnalyticsCategoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->