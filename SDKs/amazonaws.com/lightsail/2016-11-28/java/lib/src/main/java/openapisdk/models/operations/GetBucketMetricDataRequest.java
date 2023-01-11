package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBucketMetricDataRequest {
    public GetBucketMetricDataHeaders headers;
    public GetBucketMetricDataRequest withHeaders(GetBucketMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBucketMetricDataRequest request;
    public GetBucketMetricDataRequest withRequest(openapisdk.models.shared.GetBucketMetricDataRequest request) {
        this.request = request;
        return this;
    }
}