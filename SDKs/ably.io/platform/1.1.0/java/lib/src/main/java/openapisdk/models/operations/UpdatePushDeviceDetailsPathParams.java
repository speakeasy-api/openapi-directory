package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePushDeviceDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device_id")
    public String deviceId;
    public UpdatePushDeviceDetailsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}