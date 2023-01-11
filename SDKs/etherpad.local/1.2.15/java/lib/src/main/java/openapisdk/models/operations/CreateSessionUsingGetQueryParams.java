package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSessionUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public CreateSessionUsingGetQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public CreateSessionUsingGetQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=validUntil")
    public String validUntil;
    public CreateSessionUsingGetQueryParams withValidUntil(String validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}