package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSessionsOfAuthorUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public ListSessionsOfAuthorUsingGetQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}