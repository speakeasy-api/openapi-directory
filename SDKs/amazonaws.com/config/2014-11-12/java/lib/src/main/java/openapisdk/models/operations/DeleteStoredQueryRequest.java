package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStoredQueryRequest {
    public DeleteStoredQueryHeaders headers;
    public DeleteStoredQueryRequest withHeaders(DeleteStoredQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteStoredQueryRequest request;
    public DeleteStoredQueryRequest withRequest(openapisdk.models.shared.DeleteStoredQueryRequest request) {
        this.request = request;
        return this;
    }
}