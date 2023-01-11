package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSavedRevisionsCountUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetSavedRevisionsCountUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}