package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsGroupIdUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Integer groupId;
    public PostGroupsGroupIdUsersPathParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
}