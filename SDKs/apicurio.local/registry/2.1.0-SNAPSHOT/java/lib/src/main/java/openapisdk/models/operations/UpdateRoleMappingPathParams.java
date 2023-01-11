package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=principalId")
    public String principalId;
    public UpdateRoleMappingPathParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}