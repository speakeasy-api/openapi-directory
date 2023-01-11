package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServerNeighborsRequest {
    public ListServerNeighborsHeaders headers;
    public ListServerNeighborsRequest withHeaders(ListServerNeighborsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServerNeighborsRequest request;
    public ListServerNeighborsRequest withRequest(openapisdk.models.shared.ListServerNeighborsRequest request) {
        this.request = request;
        return this;
    }
}