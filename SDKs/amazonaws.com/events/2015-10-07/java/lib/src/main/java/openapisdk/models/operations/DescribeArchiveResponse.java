package openapisdk.models.operations;



public class DescribeArchiveResponse {
    public String contentType;
    public DescribeArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeArchiveResponse describeArchiveResponse;
    public DescribeArchiveResponse withDescribeArchiveResponse(openapisdk.models.shared.DescribeArchiveResponse describeArchiveResponse) {
        this.describeArchiveResponse = describeArchiveResponse;
        return this;
    }
    public Object internalException;
    public DescribeArchiveResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public DescribeArchiveResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeArchiveResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}