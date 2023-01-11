package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbLogFilesRequest {
    public PostDescribeDbLogFilesQueryParams queryParams;
    public PostDescribeDbLogFilesRequest withQueryParams(PostDescribeDbLogFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbLogFilesHeaders headers;
    public PostDescribeDbLogFilesRequest withHeaders(PostDescribeDbLogFilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbLogFilesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}