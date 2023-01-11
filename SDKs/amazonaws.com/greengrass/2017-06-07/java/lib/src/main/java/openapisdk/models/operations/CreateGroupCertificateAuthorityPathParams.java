package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupCertificateAuthorityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public CreateGroupCertificateAuthorityPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}