package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFeedbackRequest {
    public DescribeFeedbackHeaders headers;
    public DescribeFeedbackRequest withHeaders(DescribeFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeFeedbackRequestBody request;
    public DescribeFeedbackRequest withRequest(DescribeFeedbackRequestBody request) {
        this.request = request;
        return this;
    }
}