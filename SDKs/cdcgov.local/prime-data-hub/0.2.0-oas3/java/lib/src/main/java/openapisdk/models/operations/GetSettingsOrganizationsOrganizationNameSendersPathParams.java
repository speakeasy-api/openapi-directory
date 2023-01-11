package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsOrganizationsOrganizationNameSendersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public GetSettingsOrganizationsOrganizationNameSendersPathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
}