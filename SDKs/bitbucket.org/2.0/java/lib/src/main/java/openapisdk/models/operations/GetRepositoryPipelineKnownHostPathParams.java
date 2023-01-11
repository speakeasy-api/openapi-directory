package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryPipelineKnownHostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=known_host_uuid")
    public String knownHostUuid;
    public GetRepositoryPipelineKnownHostPathParams withKnownHostUuid(String knownHostUuid) {
        this.knownHostUuid = knownHostUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoryPipelineKnownHostPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoryPipelineKnownHostPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}