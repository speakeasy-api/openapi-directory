package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentproSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=terms")
    public String terms;
    public GetContentproSearchQueryParams withTerms(String terms) {
        this.terms = terms;
        return this;
    }
}