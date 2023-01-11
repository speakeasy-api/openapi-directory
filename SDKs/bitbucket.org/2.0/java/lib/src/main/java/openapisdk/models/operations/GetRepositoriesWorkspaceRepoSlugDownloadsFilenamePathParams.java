package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filename")
    public String filename;
    public GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}