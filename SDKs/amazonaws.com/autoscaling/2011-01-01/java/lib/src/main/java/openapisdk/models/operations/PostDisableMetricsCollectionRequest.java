package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableMetricsCollectionRequest {
    public PostDisableMetricsCollectionQueryParams queryParams;
    public PostDisableMetricsCollectionRequest withQueryParams(PostDisableMetricsCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableMetricsCollectionHeaders headers;
    public PostDisableMetricsCollectionRequest withHeaders(PostDisableMetricsCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableMetricsCollectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}