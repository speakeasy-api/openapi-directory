package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityDkimAttributesRequest {
    public PutEmailIdentityDkimAttributesPathParams pathParams;
    public PutEmailIdentityDkimAttributesRequest withPathParams(PutEmailIdentityDkimAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmailIdentityDkimAttributesHeaders headers;
    public PutEmailIdentityDkimAttributesRequest withHeaders(PutEmailIdentityDkimAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEmailIdentityDkimAttributesRequestBody request;
    public PutEmailIdentityDkimAttributesRequest withRequest(PutEmailIdentityDkimAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}