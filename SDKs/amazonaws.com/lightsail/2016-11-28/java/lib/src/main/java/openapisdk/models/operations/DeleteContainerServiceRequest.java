package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainerServiceRequest {
    public DeleteContainerServiceHeaders headers;
    public DeleteContainerServiceRequest withHeaders(DeleteContainerServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContainerServiceRequest request;
    public DeleteContainerServiceRequest withRequest(openapisdk.models.shared.DeleteContainerServiceRequest request) {
        this.request = request;
        return this;
    }
}