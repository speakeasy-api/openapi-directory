package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitListMatchingRefsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GitListMatchingRefsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GitListMatchingRefsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}