package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOptionGroupOptionsRequest {
    public PostDescribeOptionGroupOptionsQueryParams queryParams;
    public PostDescribeOptionGroupOptionsRequest withQueryParams(PostDescribeOptionGroupOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeOptionGroupOptionsHeaders headers;
    public PostDescribeOptionGroupOptionsRequest withHeaders(PostDescribeOptionGroupOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeOptionGroupOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}