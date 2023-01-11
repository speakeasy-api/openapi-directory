package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRemoveStatusCheckContextsRequest {
    public ReposRemoveStatusCheckContextsPathParams pathParams;
    public ReposRemoveStatusCheckContextsRequest withPathParams(ReposRemoveStatusCheckContextsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposRemoveStatusCheckContextsRequestBody request;
    public ReposRemoveStatusCheckContextsRequest withRequest(ReposRemoveStatusCheckContextsRequestBody request) {
        this.request = request;
        return this;
    }
}