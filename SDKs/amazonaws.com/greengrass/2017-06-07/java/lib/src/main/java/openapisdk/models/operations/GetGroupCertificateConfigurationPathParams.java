package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupCertificateConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public GetGroupCertificateConfigurationPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}