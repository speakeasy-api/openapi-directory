package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCodeIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public GetDeviceCodeIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetDeviceCodeIdSecurity security;
    public GetDeviceCodeIdRequest withSecurity(GetDeviceCodeIdSecurity security) {
        this.security = security;
        return this;
    }
}