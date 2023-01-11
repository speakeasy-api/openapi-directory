package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOperationsRequest {
    public ListOperationsQueryParams queryParams;
    public ListOperationsRequest withQueryParams(ListOperationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOperationsHeaders headers;
    public ListOperationsRequest withHeaders(ListOperationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOperationsRequest request;
    public ListOperationsRequest withRequest(openapisdk.models.shared.ListOperationsRequest request) {
        this.request = request;
        return this;
    }
}