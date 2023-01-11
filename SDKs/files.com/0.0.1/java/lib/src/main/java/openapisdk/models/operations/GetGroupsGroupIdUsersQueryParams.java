package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsGroupIdUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetGroupsGroupIdUsersQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetGroupsGroupIdUsersQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetGroupsGroupIdUsersQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}