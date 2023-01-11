package openapisdk.models.operations;



public class DescribeAttachmentResponse {
    public Object attachmentIdNotFound;
    public DescribeAttachmentResponse withAttachmentIdNotFound(Object attachmentIdNotFound) {
        this.attachmentIdNotFound = attachmentIdNotFound;
        return this;
    }
    public String contentType;
    public DescribeAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object describeAttachmentLimitExceeded;
    public DescribeAttachmentResponse withDescribeAttachmentLimitExceeded(Object describeAttachmentLimitExceeded) {
        this.describeAttachmentLimitExceeded = describeAttachmentLimitExceeded;
        return this;
    }
    public openapisdk.models.shared.DescribeAttachmentResponse describeAttachmentResponse;
    public DescribeAttachmentResponse withDescribeAttachmentResponse(openapisdk.models.shared.DescribeAttachmentResponse describeAttachmentResponse) {
        this.describeAttachmentResponse = describeAttachmentResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeAttachmentResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeAttachmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}