package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationOutputRequest {
    public DeleteApplicationOutputHeaders headers;
    public DeleteApplicationOutputRequest withHeaders(DeleteApplicationOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationOutputRequest request;
    public DeleteApplicationOutputRequest withRequest(openapisdk.models.shared.DeleteApplicationOutputRequest request) {
        this.request = request;
        return this;
    }
}