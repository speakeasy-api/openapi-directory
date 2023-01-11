package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRemoveAppAccessRestrictionsRequest {
    public ReposRemoveAppAccessRestrictionsPathParams pathParams;
    public ReposRemoveAppAccessRestrictionsRequest withPathParams(ReposRemoveAppAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposRemoveAppAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}