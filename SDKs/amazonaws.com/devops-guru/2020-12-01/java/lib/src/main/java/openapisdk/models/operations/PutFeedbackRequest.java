package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFeedbackRequest {
    public PutFeedbackHeaders headers;
    public PutFeedbackRequest withHeaders(PutFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutFeedbackRequestBody request;
    public PutFeedbackRequest withRequest(PutFeedbackRequestBody request) {
        this.request = request;
        return this;
    }
}