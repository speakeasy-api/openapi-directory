package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceMethodsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public GetDeviceMethodsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}