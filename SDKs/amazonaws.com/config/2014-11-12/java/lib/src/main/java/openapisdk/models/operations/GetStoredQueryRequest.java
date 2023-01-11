package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoredQueryRequest {
    public GetStoredQueryHeaders headers;
    public GetStoredQueryRequest withHeaders(GetStoredQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetStoredQueryRequest request;
    public GetStoredQueryRequest withRequest(openapisdk.models.shared.GetStoredQueryRequest request) {
        this.request = request;
        return this;
    }
}