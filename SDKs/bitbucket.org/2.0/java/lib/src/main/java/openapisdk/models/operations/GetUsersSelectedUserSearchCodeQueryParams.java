package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersSelectedUserSearchCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetUsersSelectedUserSearchCodeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagelen")
    public Integer pagelen;
    public GetUsersSelectedUserSearchCodeQueryParams withPagelen(Integer pagelen) {
        this.pagelen = pagelen;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_query")
    public String searchQuery;
    public GetUsersSelectedUserSearchCodeQueryParams withSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }
}