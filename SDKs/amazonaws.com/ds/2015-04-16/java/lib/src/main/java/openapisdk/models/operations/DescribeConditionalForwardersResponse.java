package openapisdk.models.operations;



public class DescribeConditionalForwardersResponse {
    public Object clientException;
    public DescribeConditionalForwardersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeConditionalForwardersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConditionalForwardersResult describeConditionalForwardersResult;
    public DescribeConditionalForwardersResponse withDescribeConditionalForwardersResult(openapisdk.models.shared.DescribeConditionalForwardersResult describeConditionalForwardersResult) {
        this.describeConditionalForwardersResult = describeConditionalForwardersResult;
        return this;
    }
    public Object directoryUnavailableException;
    public DescribeConditionalForwardersResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public DescribeConditionalForwardersResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeConditionalForwardersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeConditionalForwardersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeConditionalForwardersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeConditionalForwardersResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}