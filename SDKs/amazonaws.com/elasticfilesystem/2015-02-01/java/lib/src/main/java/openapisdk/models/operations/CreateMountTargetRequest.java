package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMountTargetRequest {
    public CreateMountTargetHeaders headers;
    public CreateMountTargetRequest withHeaders(CreateMountTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMountTargetRequestBody request;
    public CreateMountTargetRequest withRequest(CreateMountTargetRequestBody request) {
        this.request = request;
        return this;
    }
}