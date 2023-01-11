package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPushDeviceDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device_id")
    public String deviceId;
    public PutPushDeviceDetailsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}