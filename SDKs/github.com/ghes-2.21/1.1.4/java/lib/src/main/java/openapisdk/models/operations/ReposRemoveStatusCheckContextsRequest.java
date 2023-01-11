package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRemoveStatusCheckContextsRequest {
    public ReposRemoveStatusCheckContextsPathParams pathParams;
    public ReposRemoveStatusCheckContextsRequest withPathParams(ReposRemoveStatusCheckContextsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposRemoveStatusCheckContextsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}