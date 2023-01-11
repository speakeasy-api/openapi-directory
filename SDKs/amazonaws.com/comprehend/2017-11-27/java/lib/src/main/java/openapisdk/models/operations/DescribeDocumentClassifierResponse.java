package openapisdk.models.operations;



public class DescribeDocumentClassifierResponse {
    public String contentType;
    public DescribeDocumentClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDocumentClassifierResponse describeDocumentClassifierResponse;
    public DescribeDocumentClassifierResponse withDescribeDocumentClassifierResponse(openapisdk.models.shared.DescribeDocumentClassifierResponse describeDocumentClassifierResponse) {
        this.describeDocumentClassifierResponse = describeDocumentClassifierResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDocumentClassifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDocumentClassifierResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDocumentClassifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDocumentClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeDocumentClassifierResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}