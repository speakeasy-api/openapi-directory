package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSchemasRequest {
    public ListSchemasQueryParams queryParams;
    public ListSchemasRequest withQueryParams(ListSchemasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSchemasHeaders headers;
    public ListSchemasRequest withHeaders(ListSchemasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSchemasInput request;
    public ListSchemasRequest withRequest(openapisdk.models.shared.ListSchemasInput request) {
        this.request = request;
        return this;
    }
}