package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=milestone_id")
    public Long milestoneId;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdPathParams withMilestoneId(Long milestoneId) {
        this.milestoneId = milestoneId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}