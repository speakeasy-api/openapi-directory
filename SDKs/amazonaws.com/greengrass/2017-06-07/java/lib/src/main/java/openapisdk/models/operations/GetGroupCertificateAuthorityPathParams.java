package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupCertificateAuthorityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CertificateAuthorityId")
    public String certificateAuthorityId;
    public GetGroupCertificateAuthorityPathParams withCertificateAuthorityId(String certificateAuthorityId) {
        this.certificateAuthorityId = certificateAuthorityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public GetGroupCertificateAuthorityPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}