package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateRoleFromGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public DisassociateRoleFromGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}