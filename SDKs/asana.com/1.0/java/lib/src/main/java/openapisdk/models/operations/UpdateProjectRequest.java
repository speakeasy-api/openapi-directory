package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectRequest {
    public UpdateProjectPathParams pathParams;
    public UpdateProjectRequest withPathParams(UpdateProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateProjectQueryParams queryParams;
    public UpdateProjectRequest withQueryParams(UpdateProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateProjectRequestBodyInput request;
    public UpdateProjectRequest withRequest(UpdateProjectRequestBodyInput request) {
        this.request = request;
        return this;
    }
}