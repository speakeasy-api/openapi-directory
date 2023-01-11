package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateBranchProtectionRequest {
    public ReposUpdateBranchProtectionPathParams pathParams;
    public ReposUpdateBranchProtectionRequest withPathParams(ReposUpdateBranchProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateBranchProtectionRequestBody request;
    public ReposUpdateBranchProtectionRequest withRequest(ReposUpdateBranchProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}