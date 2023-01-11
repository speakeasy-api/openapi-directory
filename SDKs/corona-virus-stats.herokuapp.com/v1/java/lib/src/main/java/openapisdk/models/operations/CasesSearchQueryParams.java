package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CasesSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CasesSearchQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CasesSearchQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public CasesSearchQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}