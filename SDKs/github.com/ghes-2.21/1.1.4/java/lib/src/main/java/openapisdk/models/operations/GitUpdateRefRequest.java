package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitUpdateRefRequest {
    public GitUpdateRefPathParams pathParams;
    public GitUpdateRefRequest withPathParams(GitUpdateRefPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GitUpdateRefRequestBody request;
    public GitUpdateRefRequest withRequest(GitUpdateRefRequestBody request) {
        this.request = request;
        return this;
    }
}