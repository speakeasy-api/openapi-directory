package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPublicKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetUserPublicKeysQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetUserPublicKeysQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetUserPublicKeysQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}