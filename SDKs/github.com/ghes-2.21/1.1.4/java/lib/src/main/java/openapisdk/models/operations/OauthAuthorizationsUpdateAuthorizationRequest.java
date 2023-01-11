package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsUpdateAuthorizationRequest {
    public OauthAuthorizationsUpdateAuthorizationPathParams pathParams;
    public OauthAuthorizationsUpdateAuthorizationRequest withPathParams(OauthAuthorizationsUpdateAuthorizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OauthAuthorizationsUpdateAuthorizationRequestBody request;
    public OauthAuthorizationsUpdateAuthorizationRequest withRequest(OauthAuthorizationsUpdateAuthorizationRequestBody request) {
        this.request = request;
        return this;
    }
}