package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitFeedbackRequest {
    public SubmitFeedbackPathParams pathParams;
    public SubmitFeedbackRequest withPathParams(SubmitFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SubmitFeedbackHeaders headers;
    public SubmitFeedbackRequest withHeaders(SubmitFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SubmitFeedbackRequestBody request;
    public SubmitFeedbackRequest withRequest(SubmitFeedbackRequestBody request) {
        this.request = request;
        return this;
    }
}