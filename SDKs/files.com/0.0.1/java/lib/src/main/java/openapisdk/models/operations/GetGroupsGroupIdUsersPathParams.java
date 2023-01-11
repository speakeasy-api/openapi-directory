package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsGroupIdUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Integer groupId;
    public GetGroupsGroupIdUsersPathParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
}