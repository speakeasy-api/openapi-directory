package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesAddLabelsRequest {
    public IssuesAddLabelsPathParams pathParams;
    public IssuesAddLabelsRequest withPathParams(IssuesAddLabelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public IssuesAddLabelsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}