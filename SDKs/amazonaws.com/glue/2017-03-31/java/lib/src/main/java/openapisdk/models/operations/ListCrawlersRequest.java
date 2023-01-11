package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCrawlersRequest {
    public ListCrawlersQueryParams queryParams;
    public ListCrawlersRequest withQueryParams(ListCrawlersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCrawlersHeaders headers;
    public ListCrawlersRequest withHeaders(ListCrawlersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCrawlersRequest request;
    public ListCrawlersRequest withRequest(openapisdk.models.shared.ListCrawlersRequest request) {
        this.request = request;
        return this;
    }
}