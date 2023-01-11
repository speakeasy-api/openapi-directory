package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupRequest {
    public DeleteGroupHeaders headers;
    public DeleteGroupRequest withHeaders(DeleteGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteGroupRequestBody request;
    public DeleteGroupRequest withRequest(DeleteGroupRequestBody request) {
        this.request = request;
        return this;
    }
}