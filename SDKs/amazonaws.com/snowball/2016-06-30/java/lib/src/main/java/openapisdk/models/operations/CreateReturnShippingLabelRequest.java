package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReturnShippingLabelRequest {
    public CreateReturnShippingLabelHeaders headers;
    public CreateReturnShippingLabelRequest withHeaders(CreateReturnShippingLabelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReturnShippingLabelRequest request;
    public CreateReturnShippingLabelRequest withRequest(openapisdk.models.shared.CreateReturnShippingLabelRequest request) {
        this.request = request;
        return this;
    }
}