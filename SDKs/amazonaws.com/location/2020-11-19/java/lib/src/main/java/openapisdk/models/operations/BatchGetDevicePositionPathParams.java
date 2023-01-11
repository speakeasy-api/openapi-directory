package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDevicePositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public BatchGetDevicePositionPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}