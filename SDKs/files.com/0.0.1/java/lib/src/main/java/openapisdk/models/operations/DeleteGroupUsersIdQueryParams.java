package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupUsersIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public Integer groupId;
    public DeleteGroupUsersIdQueryParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public DeleteGroupUsersIdQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}