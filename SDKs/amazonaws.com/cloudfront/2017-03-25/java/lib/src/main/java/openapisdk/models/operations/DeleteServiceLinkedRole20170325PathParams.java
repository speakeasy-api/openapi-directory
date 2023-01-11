package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceLinkedRole20170325PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoleName")
    public String roleName;
    public DeleteServiceLinkedRole20170325PathParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
}