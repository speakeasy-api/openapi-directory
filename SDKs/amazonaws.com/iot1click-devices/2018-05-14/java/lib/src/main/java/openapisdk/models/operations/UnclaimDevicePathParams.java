package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnclaimDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public UnclaimDevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}