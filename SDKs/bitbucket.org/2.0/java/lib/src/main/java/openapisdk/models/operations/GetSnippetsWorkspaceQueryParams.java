package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public GetSnippetsWorkspaceRoleEnum role;
    public GetSnippetsWorkspaceQueryParams withRole(GetSnippetsWorkspaceRoleEnum role) {
        this.role = role;
        return this;
    }
}