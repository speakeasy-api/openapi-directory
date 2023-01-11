package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSessionUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public CreateSessionUsingPostQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public CreateSessionUsingPostQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=validUntil")
    public String validUntil;
    public CreateSessionUsingPostQueryParams withValidUntil(String validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}