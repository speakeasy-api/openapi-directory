package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsertSectionForProjectRequest {
    public InsertSectionForProjectPathParams pathParams;
    public InsertSectionForProjectRequest withPathParams(InsertSectionForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InsertSectionForProjectQueryParams queryParams;
    public InsertSectionForProjectRequest withQueryParams(InsertSectionForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InsertSectionForProjectRequestBody request;
    public InsertSectionForProjectRequest withRequest(InsertSectionForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}