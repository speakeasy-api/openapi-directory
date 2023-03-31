<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SaveStatsRequest;
import org.openapis.openapi.models.operations.SaveStatsResponse;
import org.openapis.openapi.models.shared.SaveStatsRequestBody;
import org.openapis.openapi.models.shared.AttemptStreamStats;
import org.openapis.openapi.models.shared.AttemptStats;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SaveStatsRequest req = new SaveStatsRequest() {{
                request = new SaveStatsRequestBody() {{
                    attemptNumber = 548814;
                    jobId = 592845;
                    stats = new AttemptStats() {{
                        bytesEmitted = 715190;
                        estimatedBytes = 844266;
                        estimatedRecords = 602763;
                        recordsCommitted = 857946;
                        recordsEmitted = 544883;
                        stateMessagesEmitted = 847252;
                    }};
                    streamStats = new org.openapis.openapi.models.shared.AttemptStreamStats[]{{
                        add(new AttemptStreamStats() {{
                            stats = new AttemptStats() {{
                                bytesEmitted = 623564;
                                estimatedBytes = 645894;
                                estimatedRecords = 384382;
                                recordsCommitted = 437587;
                                recordsEmitted = 297534;
                                stateMessagesEmitted = 891773;
                            }};
                            streamName = "ipsa";
                            streamNamespace = "delectus";
                        }}),
                        add(new AttemptStreamStats() {{
                            stats = new AttemptStats() {{
                                bytesEmitted = 272656;
                                estimatedBytes = 383441;
                                estimatedRecords = 477665;
                                recordsCommitted = 791725;
                                recordsEmitted = 812169;
                                stateMessagesEmitted = 528895;
                            }};
                            streamName = "iusto";
                            streamNamespace = "excepturi";
                        }}),
                    }};
                }};
            }};            

            SaveStatsResponse res = sdk.attempt.saveStats(req);

            if (res.internalOperationResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->