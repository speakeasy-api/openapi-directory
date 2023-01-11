package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLastEditedUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetLastEditedUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}