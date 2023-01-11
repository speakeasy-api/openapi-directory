package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddAppAccessRestrictionsRequest {
    public ReposAddAppAccessRestrictionsPathParams pathParams;
    public ReposAddAppAccessRestrictionsRequest withPathParams(ReposAddAppAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposAddAppAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}