package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddStatusCheckContextsRequest {
    public ReposAddStatusCheckContextsPathParams pathParams;
    public ReposAddStatusCheckContextsRequest withPathParams(ReposAddStatusCheckContextsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposAddStatusCheckContextsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}