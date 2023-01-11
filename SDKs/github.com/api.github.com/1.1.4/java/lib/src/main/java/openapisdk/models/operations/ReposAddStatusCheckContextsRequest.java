package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddStatusCheckContextsRequest {
    public ReposAddStatusCheckContextsPathParams pathParams;
    public ReposAddStatusCheckContextsRequest withPathParams(ReposAddStatusCheckContextsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposAddStatusCheckContextsRequestBody request;
    public ReposAddStatusCheckContextsRequest withRequest(ReposAddStatusCheckContextsRequestBody request) {
        this.request = request;
        return this;
    }
}