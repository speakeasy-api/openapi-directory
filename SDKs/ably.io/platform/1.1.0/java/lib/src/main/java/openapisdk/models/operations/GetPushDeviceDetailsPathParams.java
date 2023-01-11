package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPushDeviceDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device_id")
    public String deviceId;
    public GetPushDeviceDetailsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}