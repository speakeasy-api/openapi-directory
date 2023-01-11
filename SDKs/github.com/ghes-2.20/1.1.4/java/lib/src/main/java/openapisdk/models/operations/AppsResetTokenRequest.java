package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsResetTokenRequest {
    public AppsResetTokenPathParams pathParams;
    public AppsResetTokenRequest withPathParams(AppsResetTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsResetTokenRequestBody request;
    public AppsResetTokenRequest withRequest(AppsResetTokenRequestBody request) {
        this.request = request;
        return this;
    }
}