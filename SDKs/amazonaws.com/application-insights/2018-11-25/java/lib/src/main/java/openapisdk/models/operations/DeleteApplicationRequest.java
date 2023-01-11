package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationRequest {
    public DeleteApplicationHeaders headers;
    public DeleteApplicationRequest withHeaders(DeleteApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationRequest request;
    public DeleteApplicationRequest withRequest(openapisdk.models.shared.DeleteApplicationRequest request) {
        this.request = request;
        return this;
    }
}