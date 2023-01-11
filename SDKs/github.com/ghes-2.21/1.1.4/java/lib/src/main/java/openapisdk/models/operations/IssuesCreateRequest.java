package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesCreateRequest {
    public IssuesCreatePathParams pathParams;
    public IssuesCreateRequest withPathParams(IssuesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesCreateRequestBody request;
    public IssuesCreateRequest withRequest(IssuesCreateRequestBody request) {
        this.request = request;
        return this;
    }
}