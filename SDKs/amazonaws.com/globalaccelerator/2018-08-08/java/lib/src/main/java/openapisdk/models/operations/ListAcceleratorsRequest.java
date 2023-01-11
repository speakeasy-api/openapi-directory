package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAcceleratorsRequest {
    public ListAcceleratorsQueryParams queryParams;
    public ListAcceleratorsRequest withQueryParams(ListAcceleratorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAcceleratorsHeaders headers;
    public ListAcceleratorsRequest withHeaders(ListAcceleratorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAcceleratorsRequest request;
    public ListAcceleratorsRequest withRequest(openapisdk.models.shared.ListAcceleratorsRequest request) {
        this.request = request;
        return this;
    }
}