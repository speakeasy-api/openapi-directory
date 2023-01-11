package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListManagedSchemaArnsRequest {
    public ListManagedSchemaArnsQueryParams queryParams;
    public ListManagedSchemaArnsRequest withQueryParams(ListManagedSchemaArnsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListManagedSchemaArnsHeaders headers;
    public ListManagedSchemaArnsRequest withHeaders(ListManagedSchemaArnsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListManagedSchemaArnsRequestBody request;
    public ListManagedSchemaArnsRequest withRequest(ListManagedSchemaArnsRequestBody request) {
        this.request = request;
        return this;
    }
}