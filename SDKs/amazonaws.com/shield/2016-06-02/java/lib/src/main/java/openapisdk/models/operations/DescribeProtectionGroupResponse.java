package openapisdk.models.operations;



public class DescribeProtectionGroupResponse {
    public String contentType;
    public DescribeProtectionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProtectionGroupResponse describeProtectionGroupResponse;
    public DescribeProtectionGroupResponse withDescribeProtectionGroupResponse(openapisdk.models.shared.DescribeProtectionGroupResponse describeProtectionGroupResponse) {
        this.describeProtectionGroupResponse = describeProtectionGroupResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeProtectionGroupResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProtectionGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProtectionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}