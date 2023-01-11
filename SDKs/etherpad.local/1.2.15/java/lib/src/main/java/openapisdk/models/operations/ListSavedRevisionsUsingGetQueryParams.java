package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSavedRevisionsUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public ListSavedRevisionsUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}