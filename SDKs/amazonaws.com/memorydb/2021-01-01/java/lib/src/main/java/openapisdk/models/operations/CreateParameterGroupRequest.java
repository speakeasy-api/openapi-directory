package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParameterGroupRequest {
    public CreateParameterGroupHeaders headers;
    public CreateParameterGroupRequest withHeaders(CreateParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateParameterGroupRequest request;
    public CreateParameterGroupRequest withRequest(openapisdk.models.shared.CreateParameterGroupRequest request) {
        this.request = request;
        return this;
    }
}