package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsOrganizationsOrganizationNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public GetSettingsOrganizationsOrganizationNamePathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
}