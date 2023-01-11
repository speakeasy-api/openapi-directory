package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeviceEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public ListDeviceEventsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}