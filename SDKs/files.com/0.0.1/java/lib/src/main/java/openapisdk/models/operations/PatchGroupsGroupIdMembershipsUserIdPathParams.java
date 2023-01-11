package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupsGroupIdMembershipsUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Integer groupId;
    public PatchGroupsGroupIdMembershipsUserIdPathParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public PatchGroupsGroupIdMembershipsUserIdPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}