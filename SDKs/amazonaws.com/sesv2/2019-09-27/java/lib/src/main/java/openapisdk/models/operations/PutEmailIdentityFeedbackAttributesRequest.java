package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityFeedbackAttributesRequest {
    public PutEmailIdentityFeedbackAttributesPathParams pathParams;
    public PutEmailIdentityFeedbackAttributesRequest withPathParams(PutEmailIdentityFeedbackAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmailIdentityFeedbackAttributesHeaders headers;
    public PutEmailIdentityFeedbackAttributesRequest withHeaders(PutEmailIdentityFeedbackAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEmailIdentityFeedbackAttributesRequestBody request;
    public PutEmailIdentityFeedbackAttributesRequest withRequest(PutEmailIdentityFeedbackAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}