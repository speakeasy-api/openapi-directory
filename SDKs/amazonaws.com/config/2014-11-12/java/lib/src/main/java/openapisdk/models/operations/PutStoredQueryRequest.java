package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutStoredQueryRequest {
    public PutStoredQueryHeaders headers;
    public PutStoredQueryRequest withHeaders(PutStoredQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutStoredQueryRequest request;
    public PutStoredQueryRequest withRequest(openapisdk.models.shared.PutStoredQueryRequest request) {
        this.request = request;
        return this;
    }
}