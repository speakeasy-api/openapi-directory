package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSettingsOrganizationsOrganizationNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public PutSettingsOrganizationsOrganizationNamePathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
}