package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterContainerInstanceRequest {
    public DeregisterContainerInstanceHeaders headers;
    public DeregisterContainerInstanceRequest withHeaders(DeregisterContainerInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterContainerInstanceRequest request;
    public DeregisterContainerInstanceRequest withRequest(openapisdk.models.shared.DeregisterContainerInstanceRequest request) {
        this.request = request;
        return this;
    }
}