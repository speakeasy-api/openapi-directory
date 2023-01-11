package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdateDevicePositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public BatchUpdateDevicePositionPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}