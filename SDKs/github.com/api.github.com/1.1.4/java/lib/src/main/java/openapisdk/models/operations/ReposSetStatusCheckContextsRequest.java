package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetStatusCheckContextsRequest {
    public ReposSetStatusCheckContextsPathParams pathParams;
    public ReposSetStatusCheckContextsRequest withPathParams(ReposSetStatusCheckContextsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposSetStatusCheckContextsRequestBody request;
    public ReposSetStatusCheckContextsRequest withRequest(ReposSetStatusCheckContextsRequestBody request) {
        this.request = request;
        return this;
    }
}