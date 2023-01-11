package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSchemasRequest {
    public DescribeSchemasQueryParams queryParams;
    public DescribeSchemasRequest withQueryParams(DescribeSchemasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeSchemasHeaders headers;
    public DescribeSchemasRequest withHeaders(DescribeSchemasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSchemasMessage request;
    public DescribeSchemasRequest withRequest(openapisdk.models.shared.DescribeSchemasMessage request) {
        this.request = request;
        return this;
    }
}