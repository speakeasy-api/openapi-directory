package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateParameterGroupRequest {
    public UpdateParameterGroupHeaders headers;
    public UpdateParameterGroupRequest withHeaders(UpdateParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateParameterGroupRequest request;
    public UpdateParameterGroupRequest withRequest(openapisdk.models.shared.UpdateParameterGroupRequest request) {
        this.request = request;
        return this;
    }
}