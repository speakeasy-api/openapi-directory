package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetStatusCheckContextsRequest {
    public ReposSetStatusCheckContextsPathParams pathParams;
    public ReposSetStatusCheckContextsRequest withPathParams(ReposSetStatusCheckContextsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposSetStatusCheckContextsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}