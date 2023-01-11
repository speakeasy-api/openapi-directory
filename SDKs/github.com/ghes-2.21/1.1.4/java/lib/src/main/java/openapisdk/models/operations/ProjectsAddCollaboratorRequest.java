package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsAddCollaboratorRequest {
    public ProjectsAddCollaboratorPathParams pathParams;
    public ProjectsAddCollaboratorRequest withPathParams(ProjectsAddCollaboratorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsAddCollaboratorRequestBody request;
    public ProjectsAddCollaboratorRequest withRequest(ProjectsAddCollaboratorRequestBody request) {
        this.request = request;
        return this;
    }
}