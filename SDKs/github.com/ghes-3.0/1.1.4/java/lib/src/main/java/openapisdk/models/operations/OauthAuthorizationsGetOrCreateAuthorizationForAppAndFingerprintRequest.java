package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest {
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams pathParams;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest withPathParams(OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody request;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest withRequest(OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody request) {
        this.request = request;
        return this;
    }
}