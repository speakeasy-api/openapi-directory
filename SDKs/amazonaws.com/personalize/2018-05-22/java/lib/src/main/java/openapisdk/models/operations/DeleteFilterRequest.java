package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFilterRequest {
    public DeleteFilterHeaders headers;
    public DeleteFilterRequest withHeaders(DeleteFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFilterRequest request;
    public DeleteFilterRequest withRequest(openapisdk.models.shared.DeleteFilterRequest request) {
        this.request = request;
        return this;
    }
}