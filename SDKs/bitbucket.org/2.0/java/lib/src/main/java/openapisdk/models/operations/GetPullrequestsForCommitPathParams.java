package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullrequestsForCommitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public GetPullrequestsForCommitPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetPullrequestsForCommitPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetPullrequestsForCommitPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}