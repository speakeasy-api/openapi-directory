package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryPipelineCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cache_uuid")
    public String cacheUuid;
    public DeleteRepositoryPipelineCachePathParams withCacheUuid(String cacheUuid) {
        this.cacheUuid = cacheUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoryPipelineCachePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoryPipelineCachePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}