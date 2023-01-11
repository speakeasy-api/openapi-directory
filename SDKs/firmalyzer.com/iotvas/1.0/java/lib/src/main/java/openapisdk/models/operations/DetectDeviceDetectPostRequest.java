package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectDeviceDetectPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceFeatures request;
    public DetectDeviceDetectPostRequest withRequest(openapisdk.models.shared.DeviceFeatures request) {
        this.request = request;
        return this;
    }
    public DetectDeviceDetectPostSecurity security;
    public DetectDeviceDetectPostRequest withSecurity(DetectDeviceDetectPostSecurity security) {
        this.security = security;
        return this;
    }
}