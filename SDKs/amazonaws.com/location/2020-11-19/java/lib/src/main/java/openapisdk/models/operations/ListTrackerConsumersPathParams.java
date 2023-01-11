package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrackerConsumersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public ListTrackerConsumersPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}