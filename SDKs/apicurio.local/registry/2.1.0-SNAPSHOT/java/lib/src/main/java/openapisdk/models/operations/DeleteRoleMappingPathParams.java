package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRoleMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=principalId")
    public String principalId;
    public DeleteRoleMappingPathParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}