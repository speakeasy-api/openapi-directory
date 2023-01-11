package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPadsOfAuthorUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public ListPadsOfAuthorUsingPostQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}