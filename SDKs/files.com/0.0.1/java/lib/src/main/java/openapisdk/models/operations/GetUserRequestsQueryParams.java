package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetUserRequestsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetUserRequestsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}