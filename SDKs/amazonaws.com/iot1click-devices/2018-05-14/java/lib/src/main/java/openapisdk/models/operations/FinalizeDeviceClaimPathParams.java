package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FinalizeDeviceClaimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public FinalizeDeviceClaimPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}