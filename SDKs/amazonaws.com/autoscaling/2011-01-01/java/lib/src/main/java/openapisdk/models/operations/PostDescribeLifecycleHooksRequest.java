package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLifecycleHooksRequest {
    public PostDescribeLifecycleHooksQueryParams queryParams;
    public PostDescribeLifecycleHooksRequest withQueryParams(PostDescribeLifecycleHooksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLifecycleHooksHeaders headers;
    public PostDescribeLifecycleHooksRequest withHeaders(PostDescribeLifecycleHooksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLifecycleHooksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}