package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCrawlerRequest {
    public CreateCrawlerHeaders headers;
    public CreateCrawlerRequest withHeaders(CreateCrawlerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCrawlerRequest request;
    public CreateCrawlerRequest withRequest(openapisdk.models.shared.CreateCrawlerRequest request) {
        this.request = request;
        return this;
    }
}