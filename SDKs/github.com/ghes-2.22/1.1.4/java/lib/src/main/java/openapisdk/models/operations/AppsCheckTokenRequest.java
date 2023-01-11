package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCheckTokenRequest {
    public AppsCheckTokenPathParams pathParams;
    public AppsCheckTokenRequest withPathParams(AppsCheckTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsCheckTokenRequestBody request;
    public AppsCheckTokenRequest withRequest(AppsCheckTokenRequestBody request) {
        this.request = request;
        return this;
    }
}