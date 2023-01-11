package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaginationToken")
    public String paginationToken;
    public GetResourcesQueryParams withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourcesPerPage")
    public String resourcesPerPage;
    public GetResourcesQueryParams withResourcesPerPage(String resourcesPerPage) {
        this.resourcesPerPage = resourcesPerPage;
        return this;
    }
}