package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSectionRequest {
    public UpdateSectionPathParams pathParams;
    public UpdateSectionRequest withPathParams(UpdateSectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSectionQueryParams queryParams;
    public UpdateSectionRequest withQueryParams(UpdateSectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSectionRequestBody request;
    public UpdateSectionRequest withRequest(UpdateSectionRequestBody request) {
        this.request = request;
        return this;
    }
}