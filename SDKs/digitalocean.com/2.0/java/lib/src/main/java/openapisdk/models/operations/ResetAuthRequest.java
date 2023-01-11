package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetAuthRequest {
    public ResetAuthPathParams pathParams;
    public ResetAuthRequest withPathParams(ResetAuthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ResetAuthRequestBody request;
    public ResetAuthRequest withRequest(ResetAuthRequestBody request) {
        this.request = request;
        return this;
    }
}