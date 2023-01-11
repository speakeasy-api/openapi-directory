package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSavedRevisionsUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public ListSavedRevisionsUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}