package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllRegionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListAllRegionsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListAllRegionsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}