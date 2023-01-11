package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListCommentsForRepoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.SortEnum1 direction;
    public IssuesListCommentsForRepoQueryParams withDirection(openapisdk.models.shared.SortEnum1 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListCommentsForRepoQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListCommentsForRepoQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public IssuesListCommentsForRepoQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.SortEnum sort;
    public IssuesListCommentsForRepoQueryParams withSort(openapisdk.models.shared.SortEnum sort) {
        this.sort = sort;
        return this;
    }
}