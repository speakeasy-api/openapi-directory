package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateTrackerConsumerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsumerArn")
    public String consumerArn;
    public DisassociateTrackerConsumerPathParams withConsumerArn(String consumerArn) {
        this.consumerArn = consumerArn;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrackerName")
    public String trackerName;
    public DisassociateTrackerConsumerPathParams withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}