package openapisdk.models.operations;



public class DescribeQueriesResponse {
    public String contentType;
    public DescribeQueriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeQueriesResponse describeQueriesResponse;
    public DescribeQueriesResponse withDescribeQueriesResponse(openapisdk.models.shared.DescribeQueriesResponse describeQueriesResponse) {
        this.describeQueriesResponse = describeQueriesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeQueriesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeQueriesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeQueriesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeQueriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}