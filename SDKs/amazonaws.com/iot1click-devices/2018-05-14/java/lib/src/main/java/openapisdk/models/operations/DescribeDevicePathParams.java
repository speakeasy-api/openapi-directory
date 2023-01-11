package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public DescribeDevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}