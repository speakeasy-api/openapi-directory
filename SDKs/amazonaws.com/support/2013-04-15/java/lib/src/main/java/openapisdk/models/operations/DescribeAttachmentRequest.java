package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAttachmentRequest {
    public DescribeAttachmentHeaders headers;
    public DescribeAttachmentRequest withHeaders(DescribeAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAttachmentRequest request;
    public DescribeAttachmentRequest withRequest(openapisdk.models.shared.DescribeAttachmentRequest request) {
        this.request = request;
        return this;
    }
}