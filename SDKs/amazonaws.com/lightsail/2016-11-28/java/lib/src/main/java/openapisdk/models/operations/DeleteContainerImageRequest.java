package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainerImageRequest {
    public DeleteContainerImageHeaders headers;
    public DeleteContainerImageRequest withHeaders(DeleteContainerImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContainerImageRequest request;
    public DeleteContainerImageRequest withRequest(openapisdk.models.shared.DeleteContainerImageRequest request) {
        this.request = request;
        return this;
    }
}