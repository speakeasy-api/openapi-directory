package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePadUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public DeletePadUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}