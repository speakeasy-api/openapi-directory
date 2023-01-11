package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInstanceProfileRequest {
    public CreateInstanceProfileHeaders headers;
    public CreateInstanceProfileRequest withHeaders(CreateInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInstanceProfileRequest request;
    public CreateInstanceProfileRequest withRequest(openapisdk.models.shared.CreateInstanceProfileRequest request) {
        this.request = request;
        return this;
    }
}