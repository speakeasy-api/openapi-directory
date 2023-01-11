package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetUserAccessRestrictionsRequest {
    public ReposSetUserAccessRestrictionsPathParams pathParams;
    public ReposSetUserAccessRestrictionsRequest withPathParams(ReposSetUserAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposSetUserAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}