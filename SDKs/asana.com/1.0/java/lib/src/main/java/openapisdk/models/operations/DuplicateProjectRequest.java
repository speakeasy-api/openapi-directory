package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DuplicateProjectRequest {
    public DuplicateProjectPathParams pathParams;
    public DuplicateProjectRequest withPathParams(DuplicateProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DuplicateProjectQueryParams queryParams;
    public DuplicateProjectRequest withQueryParams(DuplicateProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DuplicateProjectRequestBody request;
    public DuplicateProjectRequest withRequest(DuplicateProjectRequestBody request) {
        this.request = request;
        return this;
    }
}