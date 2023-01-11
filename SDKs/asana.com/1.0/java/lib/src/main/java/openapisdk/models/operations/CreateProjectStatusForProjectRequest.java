package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectStatusForProjectRequest {
    public CreateProjectStatusForProjectPathParams pathParams;
    public CreateProjectStatusForProjectRequest withPathParams(CreateProjectStatusForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProjectStatusForProjectQueryParams queryParams;
    public CreateProjectStatusForProjectRequest withQueryParams(CreateProjectStatusForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectStatusForProjectRequestBodyInput request;
    public CreateProjectStatusForProjectRequest withRequest(CreateProjectStatusForProjectRequestBodyInput request) {
        this.request = request;
        return this;
    }
}