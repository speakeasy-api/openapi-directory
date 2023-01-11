package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClickwrapsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetClickwrapsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetClickwrapsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}