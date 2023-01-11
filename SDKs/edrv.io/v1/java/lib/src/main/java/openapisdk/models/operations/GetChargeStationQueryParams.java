package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargeStationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evses")
    public Boolean includeEvses;
    public GetChargeStationQueryParams withIncludeEvses(Boolean includeEvses) {
        this.includeEvses = includeEvses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_location")
    public Boolean includeLocation;
    public GetChargeStationQueryParams withIncludeLocation(Boolean includeLocation) {
        this.includeLocation = includeLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetChargeStationQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
}