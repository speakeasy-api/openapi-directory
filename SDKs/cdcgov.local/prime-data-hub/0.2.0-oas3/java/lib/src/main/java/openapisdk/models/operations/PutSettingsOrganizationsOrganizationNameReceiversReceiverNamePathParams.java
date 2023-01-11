package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=receiverName")
    public String receiverName;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams withReceiverName(String receiverName) {
        this.receiverName = receiverName;
        return this;
    }
}