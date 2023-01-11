package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesSetLabelsRequest {
    public IssuesSetLabelsPathParams pathParams;
    public IssuesSetLabelsRequest withPathParams(IssuesSetLabelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesSetLabelsRequestBody request;
    public IssuesSetLabelsRequest withRequest(IssuesSetLabelsRequestBody request) {
        this.request = request;
        return this;
    }
}