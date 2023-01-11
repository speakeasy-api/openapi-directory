package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetUserAccessRestrictionsRequest {
    public ReposSetUserAccessRestrictionsPathParams pathParams;
    public ReposSetUserAccessRestrictionsRequest withPathParams(ReposSetUserAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposSetUserAccessRestrictionsRequestBody request;
    public ReposSetUserAccessRestrictionsRequest withRequest(ReposSetUserAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}