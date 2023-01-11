package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPadIdUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roID")
    public String roID;
    public GetPadIdUsingPostQueryParams withRoId(String roID) {
        this.roID = roID;
        return this;
    }
}