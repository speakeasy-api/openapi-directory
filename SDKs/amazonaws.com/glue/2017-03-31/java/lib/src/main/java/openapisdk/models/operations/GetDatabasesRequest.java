package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatabasesRequest {
    public GetDatabasesQueryParams queryParams;
    public GetDatabasesRequest withQueryParams(GetDatabasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDatabasesHeaders headers;
    public GetDatabasesRequest withHeaders(GetDatabasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDatabasesRequest request;
    public GetDatabasesRequest withRequest(openapisdk.models.shared.GetDatabasesRequest request) {
        this.request = request;
        return this;
    }
}