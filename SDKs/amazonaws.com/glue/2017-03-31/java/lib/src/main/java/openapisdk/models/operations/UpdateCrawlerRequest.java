package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCrawlerRequest {
    public UpdateCrawlerHeaders headers;
    public UpdateCrawlerRequest withHeaders(UpdateCrawlerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCrawlerRequest request;
    public UpdateCrawlerRequest withRequest(openapisdk.models.shared.UpdateCrawlerRequest request) {
        this.request = request;
        return this;
    }
}