package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revspec")
    public String revspec;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams withRevspec(String revspec) {
        this.revspec = revspec;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}