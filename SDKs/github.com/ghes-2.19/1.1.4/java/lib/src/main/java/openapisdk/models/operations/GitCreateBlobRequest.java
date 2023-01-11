package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitCreateBlobRequest {
    public GitCreateBlobPathParams pathParams;
    public GitCreateBlobRequest withPathParams(GitCreateBlobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GitCreateBlobRequestBody request;
    public GitCreateBlobRequest withRequest(GitCreateBlobRequestBody request) {
        this.request = request;
        return this;
    }
}