package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSentimentDetectionJobRequest {
    public DescribeSentimentDetectionJobHeaders headers;
    public DescribeSentimentDetectionJobRequest withHeaders(DescribeSentimentDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSentimentDetectionJobRequest request;
    public DescribeSentimentDetectionJobRequest withRequest(openapisdk.models.shared.DescribeSentimentDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}