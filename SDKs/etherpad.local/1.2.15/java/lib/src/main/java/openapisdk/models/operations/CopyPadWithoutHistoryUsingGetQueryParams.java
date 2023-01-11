package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyPadWithoutHistoryUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationID")
    public String destinationID;
    public CopyPadWithoutHistoryUsingGetQueryParams withDestinationId(String destinationID) {
        this.destinationID = destinationID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public String force;
    public CopyPadWithoutHistoryUsingGetQueryParams withForce(String force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceID")
    public String sourceID;
    public CopyPadWithoutHistoryUsingGetQueryParams withSourceId(String sourceID) {
        this.sourceID = sourceID;
        return this;
    }
}