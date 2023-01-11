package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filename")
    public String filename;
    public DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}