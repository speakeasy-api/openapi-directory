package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTaskForSectionRequest {
    public AddTaskForSectionPathParams pathParams;
    public AddTaskForSectionRequest withPathParams(AddTaskForSectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddTaskForSectionQueryParams queryParams;
    public AddTaskForSectionRequest withQueryParams(AddTaskForSectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddTaskForSectionRequestBody request;
    public AddTaskForSectionRequest withRequest(AddTaskForSectionRequestBody request) {
        this.request = request;
        return this;
    }
}