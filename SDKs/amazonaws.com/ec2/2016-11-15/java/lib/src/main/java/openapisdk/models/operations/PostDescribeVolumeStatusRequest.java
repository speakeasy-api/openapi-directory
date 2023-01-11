package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVolumeStatusRequest {
    public PostDescribeVolumeStatusQueryParams queryParams;
    public PostDescribeVolumeStatusRequest withQueryParams(PostDescribeVolumeStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVolumeStatusHeaders headers;
    public PostDescribeVolumeStatusRequest withHeaders(PostDescribeVolumeStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVolumeStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}