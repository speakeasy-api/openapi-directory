package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVolumeAttributeRequest {
    public PostDescribeVolumeAttributeQueryParams queryParams;
    public PostDescribeVolumeAttributeRequest withQueryParams(PostDescribeVolumeAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVolumeAttributeHeaders headers;
    public PostDescribeVolumeAttributeRequest withHeaders(PostDescribeVolumeAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVolumeAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}