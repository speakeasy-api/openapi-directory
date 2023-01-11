package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitCreateRefRequest {
    public GitCreateRefPathParams pathParams;
    public GitCreateRefRequest withPathParams(GitCreateRefPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GitCreateRefRequestBody request;
    public GitCreateRefRequest withRequest(GitCreateRefRequestBody request) {
        this.request = request;
        return this;
    }
}