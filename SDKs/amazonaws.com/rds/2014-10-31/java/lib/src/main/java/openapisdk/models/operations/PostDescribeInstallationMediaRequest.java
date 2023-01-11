package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstallationMediaRequest {
    public PostDescribeInstallationMediaQueryParams queryParams;
    public PostDescribeInstallationMediaRequest withQueryParams(PostDescribeInstallationMediaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstallationMediaHeaders headers;
    public PostDescribeInstallationMediaRequest withHeaders(PostDescribeInstallationMediaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstallationMediaRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}