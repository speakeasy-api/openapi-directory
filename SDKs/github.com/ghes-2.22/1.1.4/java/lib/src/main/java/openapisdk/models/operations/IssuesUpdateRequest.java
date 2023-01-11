package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesUpdateRequest {
    public IssuesUpdatePathParams pathParams;
    public IssuesUpdateRequest withPathParams(IssuesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesUpdateRequestBody request;
    public IssuesUpdateRequest withRequest(IssuesUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}