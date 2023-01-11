package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevisionsCountUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetRevisionsCountUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}