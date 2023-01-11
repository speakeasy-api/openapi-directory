package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesUpdateLabelRequest {
    public IssuesUpdateLabelPathParams pathParams;
    public IssuesUpdateLabelRequest withPathParams(IssuesUpdateLabelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesUpdateLabelRequestBody request;
    public IssuesUpdateLabelRequest withRequest(IssuesUpdateLabelRequestBody request) {
        this.request = request;
        return this;
    }
}