package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNegotiatedPricePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetNegotiatedPricePoliciesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}