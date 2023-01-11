package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRemoveUserAccessRestrictionsRequest {
    public ReposRemoveUserAccessRestrictionsPathParams pathParams;
    public ReposRemoveUserAccessRestrictionsRequest withPathParams(ReposRemoveUserAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposRemoveUserAccessRestrictionsRequestBody request;
    public ReposRemoveUserAccessRestrictionsRequest withRequest(ReposRemoveUserAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}