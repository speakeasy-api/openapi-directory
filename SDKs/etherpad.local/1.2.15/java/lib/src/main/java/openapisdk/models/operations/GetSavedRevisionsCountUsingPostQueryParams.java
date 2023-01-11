package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSavedRevisionsCountUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetSavedRevisionsCountUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}