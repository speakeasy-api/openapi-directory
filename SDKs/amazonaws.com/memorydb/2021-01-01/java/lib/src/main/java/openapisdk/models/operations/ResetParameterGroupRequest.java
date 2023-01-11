package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetParameterGroupRequest {
    public ResetParameterGroupHeaders headers;
    public ResetParameterGroupRequest withHeaders(ResetParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResetParameterGroupRequest request;
    public ResetParameterGroupRequest withRequest(openapisdk.models.shared.ResetParameterGroupRequest request) {
        this.request = request;
        return this;
    }
}