package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCrawlerScheduleRequest {
    public UpdateCrawlerScheduleHeaders headers;
    public UpdateCrawlerScheduleRequest withHeaders(UpdateCrawlerScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCrawlerScheduleRequest request;
    public UpdateCrawlerScheduleRequest withRequest(openapisdk.models.shared.UpdateCrawlerScheduleRequest request) {
        this.request = request;
        return this;
    }
}