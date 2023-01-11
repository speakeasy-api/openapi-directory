package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPushDeviceDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device_id")
    public String deviceId;
    public PatchPushDeviceDetailsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}