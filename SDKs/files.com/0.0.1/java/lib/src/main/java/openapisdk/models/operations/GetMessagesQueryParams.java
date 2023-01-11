package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetMessagesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetMessagesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project_id")
    public Integer projectId;
    public GetMessagesQueryParams withProjectId(Integer projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetMessagesQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}