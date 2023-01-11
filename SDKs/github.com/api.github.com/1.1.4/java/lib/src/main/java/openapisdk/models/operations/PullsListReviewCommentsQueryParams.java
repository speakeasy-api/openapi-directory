package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsListReviewCommentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.SortEnum1 direction;
    public PullsListReviewCommentsQueryParams withDirection(openapisdk.models.shared.SortEnum1 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PullsListReviewCommentsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PullsListReviewCommentsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PullsListReviewCommentsQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.SortEnum sort;
    public PullsListReviewCommentsQueryParams withSort(openapisdk.models.shared.SortEnum sort) {
        this.sort = sort;
        return this;
    }
}