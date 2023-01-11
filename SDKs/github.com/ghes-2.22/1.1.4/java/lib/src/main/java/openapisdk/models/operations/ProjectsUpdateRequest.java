package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsUpdateRequest {
    public ProjectsUpdatePathParams pathParams;
    public ProjectsUpdateRequest withPathParams(ProjectsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsUpdateRequestBody request;
    public ProjectsUpdateRequest withRequest(ProjectsUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}