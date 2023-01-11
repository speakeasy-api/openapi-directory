package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesCreateMilestoneRequest {
    public IssuesCreateMilestonePathParams pathParams;
    public IssuesCreateMilestoneRequest withPathParams(IssuesCreateMilestonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesCreateMilestoneRequestBody request;
    public IssuesCreateMilestoneRequest withRequest(IssuesCreateMilestoneRequestBody request) {
        this.request = request;
        return this;
    }
}