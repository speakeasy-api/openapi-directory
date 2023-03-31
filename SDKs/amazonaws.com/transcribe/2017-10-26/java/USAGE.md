<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest() {{
                headers = new CreateCallAnalyticsCategoryHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Transcribe.CreateCallAnalyticsCategory";
                }};
                request = new CreateCallAnalyticsCategoryRequest() {{
                    categoryName = "illum";
                    inputType = "REAL_TIME";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 645894;
                                    first = 384382;
                                    last = 437587;
                                    startTime = 297534;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 56713;
                                    first = 963663;
                                    last = 272656;
                                    startPercentage = 383441;
                                }};
                                threshold = 477665;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 791725;
                                    first = 812169;
                                    last = 528895;
                                    startTime = 479977;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 568045;
                                    first = 392785;
                                    last = 925597;
                                    startPercentage = 836079;
                                }};
                                threshold = 71036;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 337396;
                                    first = 87129;
                                    last = 648172;
                                    startTime = 20218;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 832620;
                                    first = 957156;
                                    last = 778157;
                                    startPercentage = 140350;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("MIXED"),
                                    add("MIXED"),
                                    add("NEGATIVE"),
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 800911;
                                    first = 461479;
                                    last = 520478;
                                    startTime = 780529;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 118274;
                                    first = 720633;
                                    last = 639921;
                                    startPercentage = 582020;
                                }};
                                targets = new String[]{{
                                    add("deleniti"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 944669;
                                    first = 758616;
                                    last = 521848;
                                    startTime = 105907;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 473600;
                                    first = 264555;
                                    last = 186332;
                                    startPercentage = 774234;
                                }};
                                threshold = 736918;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 456150;
                                    first = 216550;
                                    last = 568434;
                                    startTime = 135218;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 18789;
                                    first = 324141;
                                    last = 617636;
                                    startPercentage = 149675;
                                }};
                                threshold = 612096;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 222321;
                                    first = 616934;
                                    last = 386489;
                                    startTime = 943749;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 681820;
                                    first = 449950;
                                    last = 359508;
                                    startPercentage = 613064;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("MIXED"),
                                    add("NEUTRAL"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 99280;
                                    first = 60225;
                                    last = 969810;
                                    startTime = 666767;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 670638;
                                    first = 170909;
                                    last = 210382;
                                    startPercentage = 358152;
                                }};
                                targets = new String[]{{
                                    add("nobis"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 315428;
                                    first = 607831;
                                    last = 363711;
                                    startTime = 325047;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 38425;
                                    first = 438601;
                                    last = 634274;
                                    startPercentage = 988374;
                                }};
                                threshold = 958950;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 102044;
                                    first = 652790;
                                    last = 208876;
                                    startTime = 635059;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 161309;
                                    first = 995300;
                                    last = 653108;
                                    startPercentage = 581850;
                                }};
                                threshold = 253291;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 414369;
                                    first = 466311;
                                    last = 474697;
                                    startTime = 244425;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 158969;
                                    first = 338007;
                                    last = 110375;
                                    startPercentage = 674752;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("NEGATIVE"),
                                    add("POSITIVE"),
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 196582;
                                    first = 949572;
                                    last = 368725;
                                    startTime = 662527;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 13571;
                                    first = 97101;
                                    last = 622846;
                                    startPercentage = 837945;
                                }};
                                targets = new String[]{{
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
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