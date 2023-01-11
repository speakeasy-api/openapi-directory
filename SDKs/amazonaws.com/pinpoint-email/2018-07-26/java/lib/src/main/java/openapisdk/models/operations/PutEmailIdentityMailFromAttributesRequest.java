package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityMailFromAttributesRequest {
    public PutEmailIdentityMailFromAttributesPathParams pathParams;
    public PutEmailIdentityMailFromAttributesRequest withPathParams(PutEmailIdentityMailFromAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmailIdentityMailFromAttributesHeaders headers;
    public PutEmailIdentityMailFromAttributesRequest withHeaders(PutEmailIdentityMailFromAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEmailIdentityMailFromAttributesRequestBody request;
    public PutEmailIdentityMailFromAttributesRequest withRequest(PutEmailIdentityMailFromAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}