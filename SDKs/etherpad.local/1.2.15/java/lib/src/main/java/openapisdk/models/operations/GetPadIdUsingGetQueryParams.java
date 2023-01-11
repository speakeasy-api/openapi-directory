package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPadIdUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roID")
    public String roID;
    public GetPadIdUsingGetQueryParams withRoId(String roID) {
        this.roID = roID;
        return this;
    }
}