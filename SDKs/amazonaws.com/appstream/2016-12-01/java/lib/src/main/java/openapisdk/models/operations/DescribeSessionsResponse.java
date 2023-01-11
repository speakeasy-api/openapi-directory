package openapisdk.models.operations;



public class DescribeSessionsResponse {
    public String contentType;
    public DescribeSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSessionsResult describeSessionsResult;
    public DescribeSessionsResponse withDescribeSessionsResult(openapisdk.models.shared.DescribeSessionsResult describeSessionsResult) {
        this.describeSessionsResult = describeSessionsResult;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeSessionsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Long statusCode;
    public DescribeSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}