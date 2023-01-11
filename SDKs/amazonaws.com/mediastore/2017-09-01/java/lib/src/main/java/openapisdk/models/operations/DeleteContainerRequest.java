package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainerRequest {
    public DeleteContainerHeaders headers;
    public DeleteContainerRequest withHeaders(DeleteContainerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContainerInput request;
    public DeleteContainerRequest withRequest(openapisdk.models.shared.DeleteContainerInput request) {
        this.request = request;
        return this;
    }
}