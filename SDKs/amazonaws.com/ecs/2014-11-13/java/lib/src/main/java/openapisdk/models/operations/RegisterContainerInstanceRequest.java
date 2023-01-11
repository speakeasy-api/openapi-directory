package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterContainerInstanceRequest {
    public RegisterContainerInstanceHeaders headers;
    public RegisterContainerInstanceRequest withHeaders(RegisterContainerInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterContainerInstanceRequest request;
    public RegisterContainerInstanceRequest withRequest(openapisdk.models.shared.RegisterContainerInstanceRequest request) {
        this.request = request;
        return this;
    }
}