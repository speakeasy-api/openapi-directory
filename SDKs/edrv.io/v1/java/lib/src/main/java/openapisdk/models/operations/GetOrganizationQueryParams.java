package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_locations")
    public Boolean includeLocations;
    public GetOrganizationQueryParams withIncludeLocations(Boolean includeLocations) {
        this.includeLocations = includeLocations;
        return this;
    }
}