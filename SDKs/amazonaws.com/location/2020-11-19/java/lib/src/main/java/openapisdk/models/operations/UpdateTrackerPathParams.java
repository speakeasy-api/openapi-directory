package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrackerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public UpdateTrackerPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}