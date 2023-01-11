package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteParameterGroupRequest {
    public DeleteParameterGroupHeaders headers;
    public DeleteParameterGroupRequest withHeaders(DeleteParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteParameterGroupRequest request;
    public DeleteParameterGroupRequest withRequest(openapisdk.models.shared.DeleteParameterGroupRequest request) {
        this.request = request;
        return this;
    }
}