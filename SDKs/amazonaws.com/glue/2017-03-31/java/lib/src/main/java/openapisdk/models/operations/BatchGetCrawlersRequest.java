package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetCrawlersRequest {
    public BatchGetCrawlersHeaders headers;
    public BatchGetCrawlersRequest withHeaders(BatchGetCrawlersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetCrawlersRequest request;
    public BatchGetCrawlersRequest withRequest(openapisdk.models.shared.BatchGetCrawlersRequest request) {
        this.request = request;
        return this;
    }
}