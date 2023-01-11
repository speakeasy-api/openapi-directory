package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitCreateTreeRequest {
    public GitCreateTreePathParams pathParams;
    public GitCreateTreeRequest withPathParams(GitCreateTreePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GitCreateTreeRequestBody request;
    public GitCreateTreeRequest withRequest(GitCreateTreeRequestBody request) {
        this.request = request;
        return this;
    }
}