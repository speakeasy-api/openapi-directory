package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiRequest {
    public CreateApiQueryParams queryParams;
    public CreateApiRequest withQueryParams(CreateApiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateApiRequestBody request;
    public CreateApiRequest withRequest(CreateApiRequestBody request) {
        this.request = request;
        return this;
    }
}