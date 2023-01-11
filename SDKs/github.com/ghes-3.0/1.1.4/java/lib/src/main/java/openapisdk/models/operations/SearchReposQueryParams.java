package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchReposQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.OrderEnum order;
    public SearchReposQueryParams withOrder(openapisdk.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchReposQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchReposQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchReposQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchReposSortEnum sort;
    public SearchReposQueryParams withSort(SearchReposSortEnum sort) {
        this.sort = sort;
        return this;
    }
}