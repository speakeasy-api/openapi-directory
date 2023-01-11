package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminSetUserMfaPreferenceRequest {
    public AdminSetUserMfaPreferenceHeaders headers;
    public AdminSetUserMfaPreferenceRequest withHeaders(AdminSetUserMfaPreferenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminSetUserMfaPreferenceRequest request;
    public AdminSetUserMfaPreferenceRequest withRequest(openapisdk.models.shared.AdminSetUserMfaPreferenceRequest request) {
        this.request = request;
        return this;
    }
}