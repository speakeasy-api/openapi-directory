package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_driver")
    public Boolean includeDriver;
    public GetTokenQueryParams withIncludeDriver(Boolean includeDriver) {
        this.includeDriver = includeDriver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetTokenQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
}