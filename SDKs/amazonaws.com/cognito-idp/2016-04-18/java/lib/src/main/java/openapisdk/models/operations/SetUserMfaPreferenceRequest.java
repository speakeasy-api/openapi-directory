package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUserMfaPreferenceRequest {
    public SetUserMfaPreferenceHeaders headers;
    public SetUserMfaPreferenceRequest withHeaders(SetUserMfaPreferenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetUserMfaPreferenceRequest request;
    public SetUserMfaPreferenceRequest withRequest(openapisdk.models.shared.SetUserMfaPreferenceRequest request) {
        this.request = request;
        return this;
    }
}