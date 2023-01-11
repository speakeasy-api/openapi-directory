package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsMoveColumnRequest {
    public ProjectsMoveColumnPathParams pathParams;
    public ProjectsMoveColumnRequest withPathParams(ProjectsMoveColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsMoveColumnRequestBody request;
    public ProjectsMoveColumnRequest withRequest(ProjectsMoveColumnRequestBody request) {
        this.request = request;
        return this;
    }
}