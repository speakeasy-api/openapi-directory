package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAs2KeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetAs2KeysQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetAs2KeysQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetAs2KeysQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}