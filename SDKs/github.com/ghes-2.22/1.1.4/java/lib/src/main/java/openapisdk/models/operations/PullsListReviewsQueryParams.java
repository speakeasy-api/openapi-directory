package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsListReviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PullsListReviewsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PullsListReviewsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}