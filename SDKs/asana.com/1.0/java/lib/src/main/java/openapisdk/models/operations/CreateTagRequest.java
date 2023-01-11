package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagRequest {
    public CreateTagQueryParams queryParams;
    public CreateTagRequest withQueryParams(CreateTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTagRequestBodyInput request;
    public CreateTagRequest withRequest(CreateTagRequestBodyInput request) {
        this.request = request;
        return this;
    }
}