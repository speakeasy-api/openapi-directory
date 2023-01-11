package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReturnPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetReturnPoliciesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}