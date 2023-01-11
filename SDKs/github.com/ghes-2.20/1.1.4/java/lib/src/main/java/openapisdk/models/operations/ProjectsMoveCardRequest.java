package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsMoveCardRequest {
    public ProjectsMoveCardPathParams pathParams;
    public ProjectsMoveCardRequest withPathParams(ProjectsMoveCardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsMoveCardRequestBody request;
    public ProjectsMoveCardRequest withRequest(ProjectsMoveCardRequestBody request) {
        this.request = request;
        return this;
    }
}