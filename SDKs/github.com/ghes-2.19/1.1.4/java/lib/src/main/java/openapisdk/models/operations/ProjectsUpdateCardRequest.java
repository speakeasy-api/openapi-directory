package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsUpdateCardRequest {
    public ProjectsUpdateCardPathParams pathParams;
    public ProjectsUpdateCardRequest withPathParams(ProjectsUpdateCardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsUpdateCardRequestBody request;
    public ProjectsUpdateCardRequest withRequest(ProjectsUpdateCardRequestBody request) {
        this.request = request;
        return this;
    }
}