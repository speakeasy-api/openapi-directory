package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoleAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleAlias")
    public String roleAlias;
    public CreateRoleAliasPathParams withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
}