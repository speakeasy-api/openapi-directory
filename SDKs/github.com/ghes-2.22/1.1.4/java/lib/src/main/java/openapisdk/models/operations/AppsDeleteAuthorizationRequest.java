package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsDeleteAuthorizationRequest {
    public AppsDeleteAuthorizationPathParams pathParams;
    public AppsDeleteAuthorizationRequest withPathParams(AppsDeleteAuthorizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsDeleteAuthorizationRequestBody request;
    public AppsDeleteAuthorizationRequest withRequest(AppsDeleteAuthorizationRequestBody request) {
        this.request = request;
        return this;
    }
}