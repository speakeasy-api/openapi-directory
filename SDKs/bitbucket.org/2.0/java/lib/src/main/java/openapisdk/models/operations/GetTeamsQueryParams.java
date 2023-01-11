package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public GetTeamsRoleEnum role;
    public GetTeamsQueryParams withRole(GetTeamsRoleEnum role) {
        this.role = role;
        return this;
    }
}