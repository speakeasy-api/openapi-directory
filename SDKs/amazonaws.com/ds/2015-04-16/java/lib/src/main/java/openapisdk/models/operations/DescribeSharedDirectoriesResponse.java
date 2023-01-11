package openapisdk.models.operations;



public class DescribeSharedDirectoriesResponse {
    public Object clientException;
    public DescribeSharedDirectoriesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeSharedDirectoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSharedDirectoriesResult describeSharedDirectoriesResult;
    public DescribeSharedDirectoriesResponse withDescribeSharedDirectoriesResult(openapisdk.models.shared.DescribeSharedDirectoriesResult describeSharedDirectoriesResult) {
        this.describeSharedDirectoriesResult = describeSharedDirectoriesResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DescribeSharedDirectoriesResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeSharedDirectoriesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSharedDirectoriesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeSharedDirectoriesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeSharedDirectoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeSharedDirectoriesResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}