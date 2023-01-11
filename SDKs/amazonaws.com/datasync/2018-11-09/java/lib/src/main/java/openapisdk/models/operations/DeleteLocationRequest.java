package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLocationRequest {
    public DeleteLocationHeaders headers;
    public DeleteLocationRequest withHeaders(DeleteLocationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLocationRequest request;
    public DeleteLocationRequest withRequest(openapisdk.models.shared.DeleteLocationRequest request) {
        this.request = request;
        return this;
    }
}