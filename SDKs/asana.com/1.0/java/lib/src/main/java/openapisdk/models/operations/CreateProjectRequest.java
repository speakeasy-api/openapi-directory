package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequest {
    public CreateProjectQueryParams queryParams;
    public CreateProjectRequest withQueryParams(CreateProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectRequestBodyInput request;
    public CreateProjectRequest withRequest(CreateProjectRequestBodyInput request) {
        this.request = request;
        return this;
    }
}