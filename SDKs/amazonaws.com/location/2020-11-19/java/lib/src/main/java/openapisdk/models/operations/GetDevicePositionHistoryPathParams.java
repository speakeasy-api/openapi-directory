package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePositionHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceId")
    public String deviceId;
    public GetDevicePositionHistoryPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public GetDevicePositionHistoryPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}