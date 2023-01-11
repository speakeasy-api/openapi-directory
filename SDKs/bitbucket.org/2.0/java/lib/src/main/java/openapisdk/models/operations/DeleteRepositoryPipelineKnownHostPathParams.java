package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryPipelineKnownHostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=known_host_uuid")
    public String knownHostUuid;
    public DeleteRepositoryPipelineKnownHostPathParams withKnownHostUuid(String knownHostUuid) {
        this.knownHostUuid = knownHostUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoryPipelineKnownHostPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoryPipelineKnownHostPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}