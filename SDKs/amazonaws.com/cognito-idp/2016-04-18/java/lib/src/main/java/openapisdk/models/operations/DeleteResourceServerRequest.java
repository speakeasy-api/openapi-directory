package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourceServerRequest {
    public DeleteResourceServerHeaders headers;
    public DeleteResourceServerRequest withHeaders(DeleteResourceServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResourceServerRequest request;
    public DeleteResourceServerRequest withRequest(openapisdk.models.shared.DeleteResourceServerRequest request) {
        this.request = request;
        return this;
    }
}