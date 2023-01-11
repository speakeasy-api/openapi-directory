package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociatedRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public GetAssociatedRolePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}