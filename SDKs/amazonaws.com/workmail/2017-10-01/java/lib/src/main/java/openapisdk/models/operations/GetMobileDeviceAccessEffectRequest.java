package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMobileDeviceAccessEffectRequest {
    public GetMobileDeviceAccessEffectHeaders headers;
    public GetMobileDeviceAccessEffectRequest withHeaders(GetMobileDeviceAccessEffectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMobileDeviceAccessEffectRequest request;
    public GetMobileDeviceAccessEffectRequest withRequest(openapisdk.models.shared.GetMobileDeviceAccessEffectRequest request) {
        this.request = request;
        return this;
    }
}