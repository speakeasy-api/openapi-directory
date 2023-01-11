package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsGroupIdPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetGroupsGroupIdPermissionsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}