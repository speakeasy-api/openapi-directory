package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrawlersRequest {
    public GetCrawlersQueryParams queryParams;
    public GetCrawlersRequest withQueryParams(GetCrawlersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCrawlersHeaders headers;
    public GetCrawlersRequest withHeaders(GetCrawlersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCrawlersRequest request;
    public GetCrawlersRequest withRequest(openapisdk.models.shared.GetCrawlersRequest request) {
        this.request = request;
        return this;
    }
}