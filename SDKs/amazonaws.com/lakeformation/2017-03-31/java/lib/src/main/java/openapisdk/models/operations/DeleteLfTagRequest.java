package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLfTagRequest {
    public DeleteLfTagHeaders headers;
    public DeleteLfTagRequest withHeaders(DeleteLfTagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLfTagRequest request;
    public DeleteLfTagRequest withRequest(openapisdk.models.shared.DeleteLfTagRequest request) {
        this.request = request;
        return this;
    }
}