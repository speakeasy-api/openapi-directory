package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsGetOrCreateAuthorizationForAppRequest {
    public OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams pathParams;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequest withPathParams(OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody request;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequest withRequest(OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody request) {
        this.request = request;
        return this;
    }
}