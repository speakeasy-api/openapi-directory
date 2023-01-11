package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListAllActionsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListAllActionsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}