package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityDkimSigningAttributesRequest {
    public PutEmailIdentityDkimSigningAttributesPathParams pathParams;
    public PutEmailIdentityDkimSigningAttributesRequest withPathParams(PutEmailIdentityDkimSigningAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmailIdentityDkimSigningAttributesHeaders headers;
    public PutEmailIdentityDkimSigningAttributesRequest withHeaders(PutEmailIdentityDkimSigningAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEmailIdentityDkimSigningAttributesRequestBody request;
    public PutEmailIdentityDkimSigningAttributesRequest withRequest(PutEmailIdentityDkimSigningAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}