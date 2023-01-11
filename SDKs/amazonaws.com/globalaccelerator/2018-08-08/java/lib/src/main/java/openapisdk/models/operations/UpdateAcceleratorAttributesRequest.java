package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAcceleratorAttributesRequest {
    public UpdateAcceleratorAttributesHeaders headers;
    public UpdateAcceleratorAttributesRequest withHeaders(UpdateAcceleratorAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAcceleratorAttributesRequest request;
    public UpdateAcceleratorAttributesRequest withRequest(openapisdk.models.shared.UpdateAcceleratorAttributesRequest request) {
        this.request = request;
        return this;
    }
}