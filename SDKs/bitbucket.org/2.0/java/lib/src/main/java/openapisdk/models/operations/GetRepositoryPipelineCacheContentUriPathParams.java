package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryPipelineCacheContentUriPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cache_uuid")
    public String cacheUuid;
    public GetRepositoryPipelineCacheContentUriPathParams withCacheUuid(String cacheUuid) {
        this.cacheUuid = cacheUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoryPipelineCacheContentUriPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoryPipelineCacheContentUriPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}