package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLocationObjectStorageRequest {
    public UpdateLocationObjectStorageHeaders headers;
    public UpdateLocationObjectStorageRequest withHeaders(UpdateLocationObjectStorageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLocationObjectStorageRequest request;
    public UpdateLocationObjectStorageRequest withRequest(openapisdk.models.shared.UpdateLocationObjectStorageRequest request) {
        this.request = request;
        return this;
    }
}