package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserImportJobRequest {
    public CreateUserImportJobHeaders headers;
    public CreateUserImportJobRequest withHeaders(CreateUserImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserImportJobRequest request;
    public CreateUserImportJobRequest withRequest(openapisdk.models.shared.CreateUserImportJobRequest request) {
        this.request = request;
        return this;
    }
}