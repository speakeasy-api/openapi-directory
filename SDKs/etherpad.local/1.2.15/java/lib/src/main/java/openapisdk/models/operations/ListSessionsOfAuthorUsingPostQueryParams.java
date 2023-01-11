package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSessionsOfAuthorUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public ListSessionsOfAuthorUsingPostQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}