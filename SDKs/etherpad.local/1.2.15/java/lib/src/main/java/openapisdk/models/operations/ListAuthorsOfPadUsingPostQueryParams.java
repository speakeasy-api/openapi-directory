package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuthorsOfPadUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public ListAuthorsOfPadUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}