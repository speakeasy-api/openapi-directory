package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHomeRegionControlRequest {
    public CreateHomeRegionControlHeaders headers;
    public CreateHomeRegionControlRequest withHeaders(CreateHomeRegionControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHomeRegionControlRequest request;
    public CreateHomeRegionControlRequest withRequest(openapisdk.models.shared.CreateHomeRegionControlRequest request) {
        this.request = request;
        return this;
    }
}