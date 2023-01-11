package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProvisionedProductPropertiesRequest {
    public UpdateProvisionedProductPropertiesHeaders headers;
    public UpdateProvisionedProductPropertiesRequest withHeaders(UpdateProvisionedProductPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProvisionedProductPropertiesInput request;
    public UpdateProvisionedProductPropertiesRequest withRequest(openapisdk.models.shared.UpdateProvisionedProductPropertiesInput request) {
        this.request = request;
        return this;
    }
}