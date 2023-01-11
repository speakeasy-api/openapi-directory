package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContainerInstancesStateRequest {
    public UpdateContainerInstancesStateHeaders headers;
    public UpdateContainerInstancesStateRequest withHeaders(UpdateContainerInstancesStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContainerInstancesStateRequest request;
    public UpdateContainerInstancesStateRequest withRequest(openapisdk.models.shared.UpdateContainerInstancesStateRequest request) {
        this.request = request;
        return this;
    }
}