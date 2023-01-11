package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetConsoleOutputRequest {
    public PostGetConsoleOutputQueryParams queryParams;
    public PostGetConsoleOutputRequest withQueryParams(PostGetConsoleOutputQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetConsoleOutputHeaders headers;
    public PostGetConsoleOutputRequest withHeaders(PostGetConsoleOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetConsoleOutputRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}