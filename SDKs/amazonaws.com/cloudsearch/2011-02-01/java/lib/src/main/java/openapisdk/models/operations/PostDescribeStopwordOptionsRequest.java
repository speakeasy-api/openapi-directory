package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStopwordOptionsRequest {
    public PostDescribeStopwordOptionsQueryParams queryParams;
    public PostDescribeStopwordOptionsRequest withQueryParams(PostDescribeStopwordOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeStopwordOptionsHeaders headers;
    public PostDescribeStopwordOptionsRequest withHeaders(PostDescribeStopwordOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeStopwordOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}