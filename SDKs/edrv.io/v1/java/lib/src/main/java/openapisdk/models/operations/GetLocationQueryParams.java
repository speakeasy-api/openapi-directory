package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_chargestations")
    public Boolean includeChargestations;
    public GetLocationQueryParams withIncludeChargestations(Boolean includeChargestations) {
        this.includeChargestations = includeChargestations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetLocationQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
}