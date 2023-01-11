package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountSettingsRequest {
    public GetAccountSettingsHeaders headers;
    public GetAccountSettingsRequest withHeaders(GetAccountSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetAccountSettingsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}