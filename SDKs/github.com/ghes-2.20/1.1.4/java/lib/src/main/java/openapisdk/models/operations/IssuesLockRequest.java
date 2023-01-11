package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesLockRequest {
    public IssuesLockPathParams pathParams;
    public IssuesLockRequest withPathParams(IssuesLockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesLockRequestBody request;
    public IssuesLockRequest withRequest(IssuesLockRequestBody request) {
        this.request = request;
        return this;
    }
}