package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCrawlerRequest {
    public DeleteCrawlerHeaders headers;
    public DeleteCrawlerRequest withHeaders(DeleteCrawlerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCrawlerRequest request;
    public DeleteCrawlerRequest withRequest(openapisdk.models.shared.DeleteCrawlerRequest request) {
        this.request = request;
        return this;
    }
}