package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public DeleteGroupUsingPostQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}