package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRoleAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleAlias")
    public String roleAlias;
    public DeleteRoleAliasPathParams withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
}