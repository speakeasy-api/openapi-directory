package openapisdk.models.operations;



public class DescribeTrailsResponse {
    public String contentType;
    public DescribeTrailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTrailsResponse describeTrailsResponse;
    public DescribeTrailsResponse withDescribeTrailsResponse(openapisdk.models.shared.DescribeTrailsResponse describeTrailsResponse) {
        this.describeTrailsResponse = describeTrailsResponse;
        return this;
    }
    public Object invalidTrailNameException;
    public DescribeTrailsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object operationNotPermittedException;
    public DescribeTrailsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DescribeTrailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeTrailsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}