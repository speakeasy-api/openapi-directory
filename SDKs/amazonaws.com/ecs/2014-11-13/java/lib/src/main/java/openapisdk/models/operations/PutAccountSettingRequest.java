package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountSettingRequest {
    public PutAccountSettingHeaders headers;
    public PutAccountSettingRequest withHeaders(PutAccountSettingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAccountSettingRequest request;
    public PutAccountSettingRequest withRequest(openapisdk.models.shared.PutAccountSettingRequest request) {
        this.request = request;
        return this;
    }
}