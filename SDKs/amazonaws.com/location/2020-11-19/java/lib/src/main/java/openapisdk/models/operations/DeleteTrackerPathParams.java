package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrackerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public DeleteTrackerPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}