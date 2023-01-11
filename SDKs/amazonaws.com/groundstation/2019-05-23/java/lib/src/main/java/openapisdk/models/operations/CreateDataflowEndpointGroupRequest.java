package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataflowEndpointGroupRequest {
    public CreateDataflowEndpointGroupHeaders headers;
    public CreateDataflowEndpointGroupRequest withHeaders(CreateDataflowEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDataflowEndpointGroupRequestBody request;
    public CreateDataflowEndpointGroupRequest withRequest(CreateDataflowEndpointGroupRequestBody request) {
        this.request = request;
        return this;
    }
}