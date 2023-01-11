package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddUserAccessRestrictionsRequest {
    public ReposAddUserAccessRestrictionsPathParams pathParams;
    public ReposAddUserAccessRestrictionsRequest withPathParams(ReposAddUserAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposAddUserAccessRestrictionsRequestBody request;
    public ReposAddUserAccessRestrictionsRequest withRequest(ReposAddUserAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}