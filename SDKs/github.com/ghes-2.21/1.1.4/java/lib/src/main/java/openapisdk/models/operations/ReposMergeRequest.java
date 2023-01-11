package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposMergeRequest {
    public ReposMergePathParams pathParams;
    public ReposMergeRequest withPathParams(ReposMergePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposMergeRequestBody request;
    public ReposMergeRequest withRequest(ReposMergeRequestBody request) {
        this.request = request;
        return this;
    }
}