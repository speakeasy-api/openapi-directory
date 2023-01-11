package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=senderName")
    public String senderName;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams withSenderName(String senderName) {
        this.senderName = senderName;
        return this;
    }
}