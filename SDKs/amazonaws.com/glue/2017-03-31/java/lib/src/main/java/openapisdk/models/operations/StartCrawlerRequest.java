package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCrawlerRequest {
    public StartCrawlerHeaders headers;
    public StartCrawlerRequest withHeaders(StartCrawlerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartCrawlerRequest request;
    public StartCrawlerRequest withRequest(openapisdk.models.shared.StartCrawlerRequest request) {
        this.request = request;
        return this;
    }
}