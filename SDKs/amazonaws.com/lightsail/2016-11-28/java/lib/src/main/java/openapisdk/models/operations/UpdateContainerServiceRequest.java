package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContainerServiceRequest {
    public UpdateContainerServiceHeaders headers;
    public UpdateContainerServiceRequest withHeaders(UpdateContainerServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContainerServiceRequest request;
    public UpdateContainerServiceRequest withRequest(openapisdk.models.shared.UpdateContainerServiceRequest request) {
        this.request = request;
        return this;
    }
}