package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSettingsOrganizationsOrganizationNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public DeleteSettingsOrganizationsOrganizationNamePathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
}