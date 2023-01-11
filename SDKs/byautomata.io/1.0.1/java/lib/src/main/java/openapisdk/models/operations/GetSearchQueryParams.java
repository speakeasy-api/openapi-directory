package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetSearchQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=terms")
    public String terms;
    public GetSearchQueryParams withTerms(String terms) {
        this.terms = terms;
        return this;
    }
}