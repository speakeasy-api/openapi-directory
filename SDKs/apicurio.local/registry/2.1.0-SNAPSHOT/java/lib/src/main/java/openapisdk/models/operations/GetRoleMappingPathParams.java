package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoleMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=principalId")
    public String principalId;
    public GetRoleMappingPathParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}