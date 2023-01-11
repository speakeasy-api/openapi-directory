package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MovePadUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationID")
    public String destinationID;
    public MovePadUsingGetQueryParams withDestinationId(String destinationID) {
        this.destinationID = destinationID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public String force;
    public MovePadUsingGetQueryParams withForce(String force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceID")
    public String sourceID;
    public MovePadUsingGetQueryParams withSourceId(String sourceID) {
        this.sourceID = sourceID;
        return this;
    }
}