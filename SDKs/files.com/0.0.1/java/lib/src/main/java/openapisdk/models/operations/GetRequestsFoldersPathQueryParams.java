package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRequestsFoldersPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetRequestsFoldersPathQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mine")
    public Boolean mine;
    public GetRequestsFoldersPathQueryParams withMine(Boolean mine) {
        this.mine = mine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetRequestsFoldersPathQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public GetRequestsFoldersPathQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}