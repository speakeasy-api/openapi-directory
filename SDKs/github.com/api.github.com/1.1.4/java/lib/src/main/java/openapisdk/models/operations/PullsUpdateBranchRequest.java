package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsUpdateBranchRequest {
    public PullsUpdateBranchPathParams pathParams;
    public PullsUpdateBranchRequest withPathParams(PullsUpdateBranchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsUpdateBranchRequestBody request;
    public PullsUpdateBranchRequest withRequest(PullsUpdateBranchRequestBody request) {
        this.request = request;
        return this;
    }
}