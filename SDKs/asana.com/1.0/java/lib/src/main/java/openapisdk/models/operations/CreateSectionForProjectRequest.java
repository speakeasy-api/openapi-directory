package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSectionForProjectRequest {
    public CreateSectionForProjectPathParams pathParams;
    public CreateSectionForProjectRequest withPathParams(CreateSectionForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSectionForProjectQueryParams queryParams;
    public CreateSectionForProjectRequest withQueryParams(CreateSectionForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSectionForProjectRequestBody request;
    public CreateSectionForProjectRequest withRequest(CreateSectionForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}