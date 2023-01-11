package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListPagesBuildsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListPagesBuildsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListPagesBuildsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}