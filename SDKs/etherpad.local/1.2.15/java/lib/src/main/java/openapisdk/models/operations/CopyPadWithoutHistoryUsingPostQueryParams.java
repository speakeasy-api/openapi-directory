package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyPadWithoutHistoryUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationID")
    public String destinationID;
    public CopyPadWithoutHistoryUsingPostQueryParams withDestinationId(String destinationID) {
        this.destinationID = destinationID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public String force;
    public CopyPadWithoutHistoryUsingPostQueryParams withForce(String force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceID")
    public String sourceID;
    public CopyPadWithoutHistoryUsingPostQueryParams withSourceId(String sourceID) {
        this.sourceID = sourceID;
        return this;
    }
}