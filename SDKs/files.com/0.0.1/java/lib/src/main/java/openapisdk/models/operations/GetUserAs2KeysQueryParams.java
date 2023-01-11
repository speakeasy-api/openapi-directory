package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserAs2KeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetUserAs2KeysQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetUserAs2KeysQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetUserAs2KeysQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}