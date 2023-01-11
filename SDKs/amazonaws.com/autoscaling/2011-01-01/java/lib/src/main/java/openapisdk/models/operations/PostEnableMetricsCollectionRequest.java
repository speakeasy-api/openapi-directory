package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableMetricsCollectionRequest {
    public PostEnableMetricsCollectionQueryParams queryParams;
    public PostEnableMetricsCollectionRequest withQueryParams(PostEnableMetricsCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableMetricsCollectionHeaders headers;
    public PostEnableMetricsCollectionRequest withHeaders(PostEnableMetricsCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableMetricsCollectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}