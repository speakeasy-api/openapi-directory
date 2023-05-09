<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveStatsResponse;
import org.openapis.openapi.models.shared.AttemptStats;
import org.openapis.openapi.models.shared.AttemptStreamStats;
import org.openapis.openapi.models.shared.SaveStatsRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SaveStatsRequestBody req = new SaveStatsRequestBody(548814, 592845L,                 new AttemptStats() {{
                                bytesEmitted = 715190L;
                                estimatedBytes = 844266L;
                                estimatedRecords = 602763L;
                                recordsCommitted = 857946L;
                                recordsEmitted = 544883L;
                                stateMessagesEmitted = 847252L;
                            }};) {{
                streamStats = new org.openapis.openapi.models.shared.AttemptStreamStats[]{{
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 272656L;
                                        estimatedBytes = 383441L;
                                        estimatedRecords = 477665L;
                                        recordsCommitted = 791725L;
                                        recordsEmitted = 812169L;
                                        stateMessagesEmitted = 528895L;
                                    }};, "iusto") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 623564L;
                            estimatedBytes = 645894L;
                            estimatedRecords = 384382L;
                            recordsCommitted = 437587L;
                            recordsEmitted = 297534L;
                            stateMessagesEmitted = 891773L;
                        }};
                        streamName = "ipsa";
                        streamNamespace = "delectus";
                    }}),
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 20218L;
                                        estimatedBytes = 368241L;
                                        estimatedRecords = 832620L;
                                        recordsCommitted = 957156L;
                                        recordsEmitted = 778157L;
                                        stateMessagesEmitted = 140350L;
                                    }};, "at") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 568045L;
                            estimatedBytes = 392785L;
                            estimatedRecords = 925597L;
                            recordsCommitted = 836079L;
                            recordsEmitted = 71036L;
                            stateMessagesEmitted = 337396L;
                        }};
                        streamName = "veritatis";
                        streamNamespace = "deserunt";
                    }}),
                }};
            }};            

            SaveStatsResponse res = sdk.attempt.saveStats(req);

            if (res.internalOperationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->