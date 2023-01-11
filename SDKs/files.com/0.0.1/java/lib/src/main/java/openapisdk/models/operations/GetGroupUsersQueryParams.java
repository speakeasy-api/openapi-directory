package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetGroupUsersQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public Integer groupId;
    public GetGroupUsersQueryParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetGroupUsersQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetGroupUsersQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}