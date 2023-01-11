package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLogGroupRequest {
    public DeleteLogGroupHeaders headers;
    public DeleteLogGroupRequest withHeaders(DeleteLogGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLogGroupRequest request;
    public DeleteLogGroupRequest withRequest(openapisdk.models.shared.DeleteLogGroupRequest request) {
        this.request = request;
        return this;
    }
}