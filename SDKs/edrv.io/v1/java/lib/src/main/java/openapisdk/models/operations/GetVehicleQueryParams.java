package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_driver")
    public Boolean includeDriver;
    public GetVehicleQueryParams withIncludeDriver(Boolean includeDriver) {
        this.includeDriver = includeDriver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetVehicleQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_token")
    public Boolean includeToken;
    public GetVehicleQueryParams withIncludeToken(Boolean includeToken) {
        this.includeToken = includeToken;
        return this;
    }
}