package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public GetSnippetsRoleEnum role;
    public GetSnippetsQueryParams withRole(GetSnippetsRoleEnum role) {
        this.role = role;
        return this;
    }
}