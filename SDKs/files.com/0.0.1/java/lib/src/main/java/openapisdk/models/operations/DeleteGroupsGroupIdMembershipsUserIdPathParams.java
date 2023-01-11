package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupsGroupIdMembershipsUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Integer groupId;
    public DeleteGroupsGroupIdMembershipsUserIdPathParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public DeleteGroupsGroupIdMembershipsUserIdPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}