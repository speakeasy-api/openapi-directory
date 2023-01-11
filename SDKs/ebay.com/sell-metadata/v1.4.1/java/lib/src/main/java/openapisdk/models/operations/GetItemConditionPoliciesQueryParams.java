package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemConditionPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetItemConditionPoliciesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}