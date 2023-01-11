package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_chargestation")
    public Boolean includeChargestation;
    public GetReservationQueryParams withIncludeChargestation(Boolean includeChargestation) {
        this.includeChargestation = includeChargestation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetReservationQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
}