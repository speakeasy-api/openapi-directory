package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroupCertificateAuthoritiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public ListGroupCertificateAuthoritiesPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}