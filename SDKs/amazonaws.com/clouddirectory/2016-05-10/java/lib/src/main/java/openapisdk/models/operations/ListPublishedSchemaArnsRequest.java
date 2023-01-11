package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPublishedSchemaArnsRequest {
    public ListPublishedSchemaArnsQueryParams queryParams;
    public ListPublishedSchemaArnsRequest withQueryParams(ListPublishedSchemaArnsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPublishedSchemaArnsHeaders headers;
    public ListPublishedSchemaArnsRequest withHeaders(ListPublishedSchemaArnsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListPublishedSchemaArnsRequestBody request;
    public ListPublishedSchemaArnsRequest withRequest(ListPublishedSchemaArnsRequestBody request) {
        this.request = request;
        return this;
    }
}