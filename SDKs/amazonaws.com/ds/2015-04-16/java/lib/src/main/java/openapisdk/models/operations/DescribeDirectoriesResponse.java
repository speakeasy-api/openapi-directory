package openapisdk.models.operations;



public class DescribeDirectoriesResponse {
    public Object clientException;
    public DescribeDirectoriesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeDirectoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDirectoriesResult describeDirectoriesResult;
    public DescribeDirectoriesResponse withDescribeDirectoriesResult(openapisdk.models.shared.DescribeDirectoriesResult describeDirectoriesResult) {
        this.describeDirectoriesResult = describeDirectoriesResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DescribeDirectoriesResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeDirectoriesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeDirectoriesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeDirectoriesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeDirectoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}