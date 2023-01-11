package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorNameUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public GetAuthorNameUsingPostQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}