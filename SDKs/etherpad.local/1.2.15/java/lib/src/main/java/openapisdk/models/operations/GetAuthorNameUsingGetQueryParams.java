package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorNameUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public GetAuthorNameUsingGetQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}