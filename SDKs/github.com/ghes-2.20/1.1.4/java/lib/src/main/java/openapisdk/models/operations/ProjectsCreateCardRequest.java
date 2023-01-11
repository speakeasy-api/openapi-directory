package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateCardRequest {
    public ProjectsCreateCardPathParams pathParams;
    public ProjectsCreateCardRequest withPathParams(ProjectsCreateCardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProjectsCreateCardRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}