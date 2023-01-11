package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeedbackRequest {
    public GetFeedbackQueryParams queryParams;
    public GetFeedbackRequest withQueryParams(GetFeedbackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeedbackHeaders headers;
    public GetFeedbackRequest withHeaders(GetFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetFeedbackRequestBody request;
    public GetFeedbackRequest withRequest(GetFeedbackRequestBody request) {
        this.request = request;
        return this;
    }
}