package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoteServersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetRemoteServersQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetRemoteServersQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}