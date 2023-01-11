package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDownloadDbLogFilePortionRequest {
    public PostDownloadDbLogFilePortionQueryParams queryParams;
    public PostDownloadDbLogFilePortionRequest withQueryParams(PostDownloadDbLogFilePortionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDownloadDbLogFilePortionHeaders headers;
    public PostDownloadDbLogFilePortionRequest withHeaders(PostDownloadDbLogFilePortionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDownloadDbLogFilePortionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}