<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AbsoluteTimeRange;
import org.openapis.openapi.models.shared.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.shared.InputTypeEnum;
import org.openapis.openapi.models.shared.InterruptionFilter;
import org.openapis.openapi.models.shared.NonTalkTimeFilter;
import org.openapis.openapi.models.shared.ParticipantRoleEnum;
import org.openapis.openapi.models.shared.RelativeTimeRange;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SentimentFilter;
import org.openapis.openapi.models.shared.SentimentValueEnum;
import org.openapis.openapi.models.shared.TranscriptFilter;
import org.openapis.openapi.models.shared.TranscriptFilterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest(                new CreateCallAnalyticsCategoryRequest("provident",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 844266L;
                                                            first = 602763L;
                                                            last = 857946L;
                                                            startTime = 544883L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 423655L;
                                                            first = 623564L;
                                                            last = 645894L;
                                                            startPercentage = 384382L;
                                                        }};
                                                        threshold = 437587L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 297534L;
                                                            first = 891773L;
                                                            last = 56713L;
                                                            startTime = 963663L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 272656L;
                                                            first = 383441L;
                                                            last = 477665L;
                                                            startPercentage = 791725L;
                                                        }};
                                                        threshold = 812169L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.POSITIVE),
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.MIXED),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 528895L;
                                                            first = 479977L;
                                                            last = 568045L;
                                                            startTime = 392785L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 836079L;
                                                            first = 71036L;
                                                            last = 337396L;
                                                            startPercentage = 87129L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.POSITIVE),
                                                            add(SentimentValueEnum.NEGATIVE),
                                                            add(SentimentValueEnum.MIXED),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("hic"),
                                                                        add("optio"),
                                                                        add("totam"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 978619L;
                                                            first = 473608L;
                                                            last = 799159L;
                                                            startTime = 800911L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 520478L;
                                                            first = 780529L;
                                                            last = 678880L;
                                                            startPercentage = 118274L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("officia"),
                                                            add("occaecati"),
                                                            add("fugit"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 105907L;
                                                            first = 414662L;
                                                            last = 473600L;
                                                            startTime = 264555L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 774234L;
                                                            first = 736918L;
                                                            last = 456150L;
                                                            startPercentage = 216550L;
                                                        }};
                                                        threshold = 568434L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 135218L;
                                                            first = 18789L;
                                                            last = 324141L;
                                                            startTime = 617636L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 149675L;
                                                            first = 612096L;
                                                            last = 222321L;
                                                            startPercentage = 616934L;
                                                        }};
                                                        threshold = 386489L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.POSITIVE),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 943749L;
                                                            first = 902599L;
                                                            last = 681820L;
                                                            startTime = 449950L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 613064L;
                                                            first = 437032L;
                                                            last = 902349L;
                                                            startPercentage = 697631L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.POSITIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("doloribus"),
                                                                        add("sapiente"),
                                                                        add("architecto"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 210382L;
                                                            first = 358152L;
                                                            last = 128926L;
                                                            startTime = 750686L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 607831L;
                                                            first = 363711L;
                                                            last = 325047L;
                                                            startPercentage = 570197L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("iure"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 652790L;
                                                            first = 208876L;
                                                            last = 635059L;
                                                            startTime = 161309L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 653108L;
                                                            first = 581850L;
                                                            last = 253291L;
                                                            startPercentage = 414369L;
                                                        }};
                                                        threshold = 466311L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 474697L;
                                                            first = 244425L;
                                                            last = 623510L;
                                                            startTime = 158969L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 338007L;
                                                            first = 110375L;
                                                            last = 674752L;
                                                            startPercentage = 656330L;
                                                        }};
                                                        threshold = 317202L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.NEGATIVE),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 138183L;
                                                            first = 778346L;
                                                            last = 196582L;
                                                            startTime = 949572L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 662527L;
                                                            first = 820994L;
                                                            last = 13571L;
                                                            startPercentage = 97101L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.MIXED),
                                                            add(SentimentValueEnum.NEUTRAL),
                                                            add(SentimentValueEnum.POSITIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("harum"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 976762L;
                                                            first = 55714L;
                                                            last = 604846L;
                                                            startTime = 451159L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 19987L;
                                                            first = 39187L;
                                                            last = 441711L;
                                                            startPercentage = 282807L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("dicta"),
                                                            add("corporis"),
                                                            add("dolore"),
                                                            add("iusto"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                            }}) {{
                                inputType = InputTypeEnum.REAL_TIME;
                            }};, CreateCallAnalyticsCategoryXAmzTargetEnum.TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            CreateCallAnalyticsCategoryResponse res = sdk.createCallAnalyticsCategory(req);

            if (res.createCallAnalyticsCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->