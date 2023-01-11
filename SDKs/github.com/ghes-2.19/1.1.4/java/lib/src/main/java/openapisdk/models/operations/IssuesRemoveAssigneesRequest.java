package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesRemoveAssigneesRequest {
    public IssuesRemoveAssigneesPathParams pathParams;
    public IssuesRemoveAssigneesRequest withPathParams(IssuesRemoveAssigneesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesRemoveAssigneesRequestBody request;
    public IssuesRemoveAssigneesRequest withRequest(IssuesRemoveAssigneesRequestBody request) {
        this.request = request;
        return this;
    }
}