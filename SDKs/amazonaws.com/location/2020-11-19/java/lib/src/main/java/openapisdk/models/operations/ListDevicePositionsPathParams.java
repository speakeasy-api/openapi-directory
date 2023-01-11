package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicePositionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public ListDevicePositionsPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}