package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopCrawlerScheduleRequest {
    public StopCrawlerScheduleHeaders headers;
    public StopCrawlerScheduleRequest withHeaders(StopCrawlerScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopCrawlerScheduleRequest request;
    public StopCrawlerScheduleRequest withRequest(openapisdk.models.shared.StopCrawlerScheduleRequest request) {
        this.request = request;
        return this;
    }
}