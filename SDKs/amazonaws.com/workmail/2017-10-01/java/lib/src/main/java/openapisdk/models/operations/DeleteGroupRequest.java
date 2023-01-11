package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupRequest {
    public DeleteGroupHeaders headers;
    public DeleteGroupRequest withHeaders(DeleteGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteGroupRequest request;
    public DeleteGroupRequest withRequest(openapisdk.models.shared.DeleteGroupRequest request) {
        this.request = request;
        return this;
    }
}