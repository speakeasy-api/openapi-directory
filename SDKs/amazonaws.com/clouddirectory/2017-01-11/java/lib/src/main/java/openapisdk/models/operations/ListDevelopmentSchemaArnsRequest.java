package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevelopmentSchemaArnsRequest {
    public ListDevelopmentSchemaArnsQueryParams queryParams;
    public ListDevelopmentSchemaArnsRequest withQueryParams(ListDevelopmentSchemaArnsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDevelopmentSchemaArnsHeaders headers;
    public ListDevelopmentSchemaArnsRequest withHeaders(ListDevelopmentSchemaArnsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListDevelopmentSchemaArnsRequestBody request;
    public ListDevelopmentSchemaArnsRequest withRequest(ListDevelopmentSchemaArnsRequestBody request) {
        this.request = request;
        return this;
    }
}