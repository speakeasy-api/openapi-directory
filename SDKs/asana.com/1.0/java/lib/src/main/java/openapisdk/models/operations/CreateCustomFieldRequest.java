package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomFieldRequest {
    public CreateCustomFieldQueryParams queryParams;
    public CreateCustomFieldRequest withQueryParams(CreateCustomFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCustomFieldRequestBodyInput request;
    public CreateCustomFieldRequest withRequest(CreateCustomFieldRequestBodyInput request) {
        this.request = request;
        return this;
    }
}