package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateForRepoRequest {
    public ProjectsCreateForRepoPathParams pathParams;
    public ProjectsCreateForRepoRequest withPathParams(ProjectsCreateForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsCreateForRepoRequestBody request;
    public ProjectsCreateForRepoRequest withRequest(ProjectsCreateForRepoRequestBody request) {
        this.request = request;
        return this;
    }
}