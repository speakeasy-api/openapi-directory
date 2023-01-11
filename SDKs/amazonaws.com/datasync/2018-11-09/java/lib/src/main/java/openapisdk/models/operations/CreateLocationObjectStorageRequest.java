package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationObjectStorageRequest {
    public CreateLocationObjectStorageHeaders headers;
    public CreateLocationObjectStorageRequest withHeaders(CreateLocationObjectStorageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLocationObjectStorageRequest request;
    public CreateLocationObjectStorageRequest withRequest(openapisdk.models.shared.CreateLocationObjectStorageRequest request) {
        this.request = request;
        return this;
    }
}