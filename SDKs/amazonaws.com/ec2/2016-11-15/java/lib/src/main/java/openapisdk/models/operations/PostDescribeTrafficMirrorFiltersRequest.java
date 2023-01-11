package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrafficMirrorFiltersRequest {
    public PostDescribeTrafficMirrorFiltersQueryParams queryParams;
    public PostDescribeTrafficMirrorFiltersRequest withQueryParams(PostDescribeTrafficMirrorFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTrafficMirrorFiltersHeaders headers;
    public PostDescribeTrafficMirrorFiltersRequest withHeaders(PostDescribeTrafficMirrorFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTrafficMirrorFiltersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}