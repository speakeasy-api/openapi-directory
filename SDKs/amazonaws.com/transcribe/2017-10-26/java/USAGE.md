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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "Transcribe.CreateCallAnalyticsCategory";
                }};
                request = new CreateCallAnalyticsCategoryRequest() {{
                    categoryName = "fugit";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 2661732831099943416;
                                    first = 8325060299420976708;
                                    last = 7837839688282259259;
                                    startTime = 2518412263346885298;
                                }};
                                negate = true;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 7144924247938981575;
                                    first = 161231572858529631;
                                    last = 7259475919510918339;
                                    startPercentage = 7373105480197164748;
                                }};
                                threshold = 3287288577352441706;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 3930927879439176946;
                                    first = 4706154865122290029;
                                    last = 2217592893536642650;
                                    startTime = 1929546706668609706;
                                }};
                                negate = true;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3706853784096366226;
                                    first = 2627038740284806767;
                                    last = 6303220950515014660;
                                    startPercentage = 4035568504096476779;
                                }};
                                threshold = 959367522974354090;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 2914295034816259174;
                                    first = 1395437218309923052;
                                    last = 6745438398739480977;
                                    startTime = 2897681629866238117;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3317123977833389635;
                                    first = 5001958211167890979;
                                    last = 167566062957544642;
                                    startPercentage = 4778690082005258714;
                                }};
                                sentiments = new openapisdk.models.shared.SentimentValueEnum[]() {{
                                    add("POSITIVE"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 5558237345453186302;
                                    first = 7845762441295307478;
                                    last = 771642788862502430;
                                    startTime = 8514850266767180993;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 7699391924090763411;
                                    first = 388440063886460141;
                                    last = 7561811714888168464;
                                    startPercentage = 3959279844101328186;
                                }};
                                targets = new String[]() {{
                                    add("modi"),
                                    add("sint"),
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