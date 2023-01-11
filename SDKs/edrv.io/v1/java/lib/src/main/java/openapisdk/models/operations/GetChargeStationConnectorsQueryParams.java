package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargeStationConnectorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evse")
    public Boolean includeEvse;
    public GetChargeStationConnectorsQueryParams withIncludeEvse(Boolean includeEvse) {
        this.includeEvse = includeEvse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetChargeStationConnectorsQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
}