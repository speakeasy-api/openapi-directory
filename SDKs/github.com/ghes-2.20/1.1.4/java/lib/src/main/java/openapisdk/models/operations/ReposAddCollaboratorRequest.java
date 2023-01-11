package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddCollaboratorRequest {
    public ReposAddCollaboratorPathParams pathParams;
    public ReposAddCollaboratorRequest withPathParams(ReposAddCollaboratorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposAddCollaboratorRequestBody request;
    public ReposAddCollaboratorRequest withRequest(ReposAddCollaboratorRequestBody request) {
        this.request = request;
        return this;
    }
}