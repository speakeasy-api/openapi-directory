package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleAlias")
    public String roleAlias;
    public UpdateRoleAliasPathParams withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
}