package openapisdk.models.operations;



public class DescribeEventTopicsResponse {
    public Object clientException;
    public DescribeEventTopicsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeEventTopicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventTopicsResult describeEventTopicsResult;
    public DescribeEventTopicsResponse withDescribeEventTopicsResult(openapisdk.models.shared.DescribeEventTopicsResult describeEventTopicsResult) {
        this.describeEventTopicsResult = describeEventTopicsResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DescribeEventTopicsResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeEventTopicsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeEventTopicsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeEventTopicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}