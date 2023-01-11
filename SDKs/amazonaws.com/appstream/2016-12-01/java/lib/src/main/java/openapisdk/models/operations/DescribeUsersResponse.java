package openapisdk.models.operations;



public class DescribeUsersResponse {
    public String contentType;
    public DescribeUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUsersResult describeUsersResult;
    public DescribeUsersResponse withDescribeUsersResult(openapisdk.models.shared.DescribeUsersResult describeUsersResult) {
        this.describeUsersResult = describeUsersResult;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeUsersResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUsersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}