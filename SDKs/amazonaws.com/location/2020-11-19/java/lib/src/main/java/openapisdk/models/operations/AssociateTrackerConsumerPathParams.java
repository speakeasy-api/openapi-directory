package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateTrackerConsumerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public AssociateTrackerConsumerPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}