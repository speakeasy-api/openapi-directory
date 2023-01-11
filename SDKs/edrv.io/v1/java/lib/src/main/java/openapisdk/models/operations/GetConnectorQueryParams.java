package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evse")
    public Boolean includeEvse;
    public GetConnectorQueryParams withIncludeEvse(Boolean includeEvse) {
        this.includeEvse = includeEvse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetConnectorQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_rate")
    public Boolean includeRate;
    public GetConnectorQueryParams withIncludeRate(Boolean includeRate) {
        this.includeRate = includeRate;
        return this;
    }
}