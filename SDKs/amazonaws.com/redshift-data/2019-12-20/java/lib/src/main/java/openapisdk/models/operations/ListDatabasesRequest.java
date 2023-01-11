package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatabasesRequest {
    public ListDatabasesQueryParams queryParams;
    public ListDatabasesRequest withQueryParams(ListDatabasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatabasesHeaders headers;
    public ListDatabasesRequest withHeaders(ListDatabasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDatabasesRequest request;
    public ListDatabasesRequest withRequest(openapisdk.models.shared.ListDatabasesRequest request) {
        this.request = request;
        return this;
    }
}