package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRoleAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roleAlias")
    public String roleAlias;
    public DescribeRoleAliasPathParams withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
}