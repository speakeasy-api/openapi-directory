package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyPadUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationID")
    public String destinationID;
    public CopyPadUsingGetQueryParams withDestinationId(String destinationID) {
        this.destinationID = destinationID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public String force;
    public CopyPadUsingGetQueryParams withForce(String force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceID")
    public String sourceID;
    public CopyPadUsingGetQueryParams withSourceId(String sourceID) {
        this.sourceID = sourceID;
        return this;
    }
}