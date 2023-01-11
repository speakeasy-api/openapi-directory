package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public SearchAccountQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagelen")
    public Integer pagelen;
    public SearchAccountQueryParams withPagelen(Integer pagelen) {
        this.pagelen = pagelen;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_query")
    public String searchQuery;
    public SearchAccountQueryParams withSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }
}