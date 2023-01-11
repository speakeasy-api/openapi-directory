package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePadUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public DeletePadUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}