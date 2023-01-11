package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesUpdateMilestoneRequest {
    public IssuesUpdateMilestonePathParams pathParams;
    public IssuesUpdateMilestoneRequest withPathParams(IssuesUpdateMilestonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesUpdateMilestoneRequestBody request;
    public IssuesUpdateMilestoneRequest withRequest(IssuesUpdateMilestoneRequestBody request) {
        this.request = request;
        return this;
    }
}