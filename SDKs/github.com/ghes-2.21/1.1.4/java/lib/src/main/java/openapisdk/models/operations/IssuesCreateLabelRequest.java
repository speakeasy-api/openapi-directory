package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesCreateLabelRequest {
    public IssuesCreateLabelPathParams pathParams;
    public IssuesCreateLabelRequest withPathParams(IssuesCreateLabelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesCreateLabelRequestBody request;
    public IssuesCreateLabelRequest withRequest(IssuesCreateLabelRequestBody request) {
        this.request = request;
        return this;
    }
}