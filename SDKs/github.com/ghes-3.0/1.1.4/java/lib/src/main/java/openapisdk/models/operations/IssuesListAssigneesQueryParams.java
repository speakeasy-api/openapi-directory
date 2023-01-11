package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListAssigneesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListAssigneesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListAssigneesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}