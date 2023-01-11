package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterPushDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device_id")
    public String deviceId;
    public UnregisterPushDevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}