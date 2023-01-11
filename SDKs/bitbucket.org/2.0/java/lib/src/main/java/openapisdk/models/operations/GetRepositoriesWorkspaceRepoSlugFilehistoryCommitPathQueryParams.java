package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=renames")
    public String renames;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams withRenames(String renames) {
        this.renames = renames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}