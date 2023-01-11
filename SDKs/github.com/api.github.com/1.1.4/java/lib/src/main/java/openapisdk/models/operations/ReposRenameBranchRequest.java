package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRenameBranchRequest {
    public ReposRenameBranchPathParams pathParams;
    public ReposRenameBranchRequest withPathParams(ReposRenameBranchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposRenameBranchRequestBody request;
    public ReposRenameBranchRequest withRequest(ReposRenameBranchRequestBody request) {
        this.request = request;
        return this;
    }
}