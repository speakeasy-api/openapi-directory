package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVolumesRequest {
    public PostDescribeVolumesQueryParams queryParams;
    public PostDescribeVolumesRequest withQueryParams(PostDescribeVolumesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVolumesHeaders headers;
    public PostDescribeVolumesRequest withHeaders(PostDescribeVolumesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVolumesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}