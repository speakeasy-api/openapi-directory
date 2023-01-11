package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeArchiveRequest {
    public DescribeArchiveHeaders headers;
    public DescribeArchiveRequest withHeaders(DescribeArchiveHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeArchiveRequest request;
    public DescribeArchiveRequest withRequest(openapisdk.models.shared.DescribeArchiveRequest request) {
        this.request = request;
        return this;
    }
}