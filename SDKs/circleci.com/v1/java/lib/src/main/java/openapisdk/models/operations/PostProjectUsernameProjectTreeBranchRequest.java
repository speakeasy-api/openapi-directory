package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectTreeBranchRequest {
    public PostProjectUsernameProjectTreeBranchPathParams pathParams;
    public PostProjectUsernameProjectTreeBranchRequest withPathParams(PostProjectUsernameProjectTreeBranchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostProjectUsernameProjectTreeBranchRequestBody request;
    public PostProjectUsernameProjectTreeBranchRequest withRequest(PostProjectUsernameProjectTreeBranchRequestBody request) {
        this.request = request;
        return this;
    }
}