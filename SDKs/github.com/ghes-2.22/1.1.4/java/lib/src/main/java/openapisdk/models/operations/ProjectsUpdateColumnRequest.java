package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsUpdateColumnRequest {
    public ProjectsUpdateColumnPathParams pathParams;
    public ProjectsUpdateColumnRequest withPathParams(ProjectsUpdateColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsUpdateColumnRequestBody request;
    public ProjectsUpdateColumnRequest withRequest(ProjectsUpdateColumnRequestBody request) {
        this.request = request;
        return this;
    }
}