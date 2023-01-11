package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrawlerRequest {
    public GetCrawlerHeaders headers;
    public GetCrawlerRequest withHeaders(GetCrawlerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCrawlerRequest request;
    public GetCrawlerRequest withRequest(openapisdk.models.shared.GetCrawlerRequest request) {
        this.request = request;
        return this;
    }
}