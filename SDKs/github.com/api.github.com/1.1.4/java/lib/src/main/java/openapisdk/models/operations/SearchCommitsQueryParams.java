package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchCommitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.OrderEnum order;
    public SearchCommitsQueryParams withOrder(openapisdk.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchCommitsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchCommitsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchCommitsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchCommitsSortEnum sort;
    public SearchCommitsQueryParams withSort(SearchCommitsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}