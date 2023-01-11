package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceSettingsRequest {
    public GetServiceSettingsHeaders headers;
    public GetServiceSettingsRequest withHeaders(GetServiceSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetServiceSettingsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}