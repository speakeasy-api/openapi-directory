package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public UpdateDeviceStatePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}