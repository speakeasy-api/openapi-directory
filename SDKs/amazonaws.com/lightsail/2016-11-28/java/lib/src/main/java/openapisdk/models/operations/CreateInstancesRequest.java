package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInstancesRequest {
    public CreateInstancesHeaders headers;
    public CreateInstancesRequest withHeaders(CreateInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInstancesRequest request;
    public CreateInstancesRequest withRequest(openapisdk.models.shared.CreateInstancesRequest request) {
        this.request = request;
        return this;
    }
}