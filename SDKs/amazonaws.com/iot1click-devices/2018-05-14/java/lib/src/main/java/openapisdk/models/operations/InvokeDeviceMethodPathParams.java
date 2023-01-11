package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeDeviceMethodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public InvokeDeviceMethodPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}