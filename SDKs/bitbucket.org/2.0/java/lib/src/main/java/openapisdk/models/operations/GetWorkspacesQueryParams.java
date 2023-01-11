package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetWorkspacesQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public GetWorkspacesRoleEnum role;
    public GetWorkspacesQueryParams withRole(GetWorkspacesRoleEnum role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetWorkspacesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}