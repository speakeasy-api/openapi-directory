package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceId")
    public String deviceId;
    public GetDevicePositionPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public GetDevicePositionPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}