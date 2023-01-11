package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountSettingDefaultRequest {
    public PutAccountSettingDefaultHeaders headers;
    public PutAccountSettingDefaultRequest withHeaders(PutAccountSettingDefaultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAccountSettingDefaultRequest request;
    public PutAccountSettingDefaultRequest withRequest(openapisdk.models.shared.PutAccountSettingDefaultRequest request) {
        this.request = request;
        return this;
    }
}