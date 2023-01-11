package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetUsersUserIdGroupsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public Integer groupId;
    public GetUsersUserIdGroupsQueryParams withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetUsersUserIdGroupsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}