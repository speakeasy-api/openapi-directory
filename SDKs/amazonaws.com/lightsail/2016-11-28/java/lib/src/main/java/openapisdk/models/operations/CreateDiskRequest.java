package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiskRequest {
    public CreateDiskHeaders headers;
    public CreateDiskRequest withHeaders(CreateDiskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDiskRequest request;
    public CreateDiskRequest withRequest(openapisdk.models.shared.CreateDiskRequest request) {
        this.request = request;
        return this;
    }
}