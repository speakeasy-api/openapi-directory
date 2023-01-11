package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductAdoptionPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetProductAdoptionPoliciesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}