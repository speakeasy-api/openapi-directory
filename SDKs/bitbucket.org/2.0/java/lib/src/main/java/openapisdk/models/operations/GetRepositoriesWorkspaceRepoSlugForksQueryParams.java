package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugForksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetRepositoriesWorkspaceRepoSlugForksQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public GetRepositoriesWorkspaceRepoSlugForksRoleEnum role;
    public GetRepositoriesWorkspaceRepoSlugForksQueryParams withRole(GetRepositoriesWorkspaceRepoSlugForksRoleEnum role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetRepositoriesWorkspaceRepoSlugForksQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}