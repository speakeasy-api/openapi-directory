package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspaceSearchCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetWorkspacesWorkspaceSearchCodeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagelen")
    public Integer pagelen;
    public GetWorkspacesWorkspaceSearchCodeQueryParams withPagelen(Integer pagelen) {
        this.pagelen = pagelen;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_query")
    public String searchQuery;
    public GetWorkspacesWorkspaceSearchCodeQueryParams withSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }
}