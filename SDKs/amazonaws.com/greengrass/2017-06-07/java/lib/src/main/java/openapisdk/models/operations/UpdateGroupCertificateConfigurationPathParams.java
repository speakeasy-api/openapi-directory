package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupCertificateConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public UpdateGroupCertificateConfigurationPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}