package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCrawlerScheduleRequest {
    public StartCrawlerScheduleHeaders headers;
    public StartCrawlerScheduleRequest withHeaders(StartCrawlerScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartCrawlerScheduleRequest request;
    public StartCrawlerScheduleRequest withRequest(openapisdk.models.shared.StartCrawlerScheduleRequest request) {
        this.request = request;
        return this;
    }
}