package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsOrganizationsOrganizationNameReceiversPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public GetSettingsOrganizationsOrganizationNameReceiversPathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
}