package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateRoleToGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public AssociateRoleToGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}