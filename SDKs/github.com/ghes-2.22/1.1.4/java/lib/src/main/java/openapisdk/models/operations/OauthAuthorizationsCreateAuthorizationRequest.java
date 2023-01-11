package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsCreateAuthorizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OauthAuthorizationsCreateAuthorizationRequestBody request;
    public OauthAuthorizationsCreateAuthorizationRequest withRequest(OauthAuthorizationsCreateAuthorizationRequestBody request) {
        this.request = request;
        return this;
    }
}