package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingStructurePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetListingStructurePoliciesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}