package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetConsoleScreenshotRequest {
    public PostGetConsoleScreenshotQueryParams queryParams;
    public PostGetConsoleScreenshotRequest withQueryParams(PostGetConsoleScreenshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetConsoleScreenshotHeaders headers;
    public PostGetConsoleScreenshotRequest withHeaders(PostGetConsoleScreenshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetConsoleScreenshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}