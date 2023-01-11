package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSchemaVersionsRequest {
    public ListSchemaVersionsQueryParams queryParams;
    public ListSchemaVersionsRequest withQueryParams(ListSchemaVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSchemaVersionsHeaders headers;
    public ListSchemaVersionsRequest withHeaders(ListSchemaVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSchemaVersionsInput request;
    public ListSchemaVersionsRequest withRequest(openapisdk.models.shared.ListSchemaVersionsInput request) {
        this.request = request;
        return this;
    }
}