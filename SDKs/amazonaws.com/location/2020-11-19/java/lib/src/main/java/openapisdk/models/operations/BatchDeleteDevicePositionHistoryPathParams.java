package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteDevicePositionHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public BatchDeleteDevicePositionHistoryPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}