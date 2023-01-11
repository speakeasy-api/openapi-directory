package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public DeleteGroupUsingGetQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}