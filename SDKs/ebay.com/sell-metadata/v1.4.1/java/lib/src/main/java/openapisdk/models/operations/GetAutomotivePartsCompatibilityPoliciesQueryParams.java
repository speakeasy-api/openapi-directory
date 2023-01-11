package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomotivePartsCompatibilityPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetAutomotivePartsCompatibilityPoliciesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}