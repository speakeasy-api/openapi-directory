package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitCreateCommitRequest {
    public GitCreateCommitPathParams pathParams;
    public GitCreateCommitRequest withPathParams(GitCreateCommitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GitCreateCommitRequestBody request;
    public GitCreateCommitRequest withRequest(GitCreateCommitRequestBody request) {
        this.request = request;
        return this;
    }
}