package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrackerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public DescribeTrackerPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}