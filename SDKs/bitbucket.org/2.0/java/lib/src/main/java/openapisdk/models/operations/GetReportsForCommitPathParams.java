package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsForCommitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public GetReportsForCommitPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetReportsForCommitPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetReportsForCommitPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}