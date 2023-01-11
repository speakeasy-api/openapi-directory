package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddUserAccessRestrictionsRequest {
    public ReposAddUserAccessRestrictionsPathParams pathParams;
    public ReposAddUserAccessRestrictionsRequest withPathParams(ReposAddUserAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposAddUserAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}