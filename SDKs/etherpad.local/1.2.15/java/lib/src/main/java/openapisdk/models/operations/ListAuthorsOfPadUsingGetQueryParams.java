package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuthorsOfPadUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public ListAuthorsOfPadUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}