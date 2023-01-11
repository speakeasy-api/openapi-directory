package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterContainerImageRequest {
    public RegisterContainerImageHeaders headers;
    public RegisterContainerImageRequest withHeaders(RegisterContainerImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterContainerImageRequest request;
    public RegisterContainerImageRequest withRequest(openapisdk.models.shared.RegisterContainerImageRequest request) {
        this.request = request;
        return this;
    }
}