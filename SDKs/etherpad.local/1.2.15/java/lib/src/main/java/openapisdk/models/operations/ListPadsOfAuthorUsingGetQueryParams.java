package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPadsOfAuthorUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public ListPadsOfAuthorUsingGetQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}