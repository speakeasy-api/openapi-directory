package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsDeleteTokenRequest {
    public AppsDeleteTokenPathParams pathParams;
    public AppsDeleteTokenRequest withPathParams(AppsDeleteTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsDeleteTokenRequestBody request;
    public AppsDeleteTokenRequest withRequest(AppsDeleteTokenRequestBody request) {
        this.request = request;
        return this;
    }
}