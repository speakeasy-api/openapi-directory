package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProvisionedProductRequest {
    public UpdateProvisionedProductHeaders headers;
    public UpdateProvisionedProductRequest withHeaders(UpdateProvisionedProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProvisionedProductInput request;
    public UpdateProvisionedProductRequest withRequest(openapisdk.models.shared.UpdateProvisionedProductInput request) {
        this.request = request;
        return this;
    }
}