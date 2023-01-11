package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevisionsCountUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetRevisionsCountUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}