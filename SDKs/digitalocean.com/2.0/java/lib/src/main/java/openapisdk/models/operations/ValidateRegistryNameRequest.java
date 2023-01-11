package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateRegistryNameRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ValidateRegistryNameRequestBody request;
    public ValidateRegistryNameRequest withRequest(ValidateRegistryNameRequestBody request) {
        this.request = request;
        return this;
    }
}