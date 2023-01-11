package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateDeviceClaimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public InitiateDeviceClaimPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}