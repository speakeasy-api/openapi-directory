package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopCrawlerRequest {
    public StopCrawlerHeaders headers;
    public StopCrawlerRequest withHeaders(StopCrawlerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopCrawlerRequest request;
    public StopCrawlerRequest withRequest(openapisdk.models.shared.StopCrawlerRequest request) {
        this.request = request;
        return this;
    }
}