package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationName")
    public String organizationName;
    public GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=receiverName")
    public String receiverName;
    public GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams withReceiverName(String receiverName) {
        this.receiverName = receiverName;
        return this;
    }
}