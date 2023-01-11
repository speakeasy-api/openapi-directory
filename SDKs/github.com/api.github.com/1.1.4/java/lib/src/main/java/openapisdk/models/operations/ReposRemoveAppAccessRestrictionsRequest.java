package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRemoveAppAccessRestrictionsRequest {
    public ReposRemoveAppAccessRestrictionsPathParams pathParams;
    public ReposRemoveAppAccessRestrictionsRequest withPathParams(ReposRemoveAppAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposRemoveAppAccessRestrictionsRequestBody request;
    public ReposRemoveAppAccessRestrictionsRequest withRequest(ReposRemoveAppAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}