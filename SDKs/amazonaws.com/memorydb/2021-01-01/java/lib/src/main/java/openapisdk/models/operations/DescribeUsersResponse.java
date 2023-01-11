package openapisdk.models.operations;



public class DescribeUsersResponse {
    public String contentType;
    public DescribeUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUsersResponse describeUsersResponse;
    public DescribeUsersResponse withDescribeUsersResponse(openapisdk.models.shared.DescribeUsersResponse describeUsersResponse) {
        this.describeUsersResponse = describeUsersResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeUsersResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Long statusCode;
    public DescribeUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userNotFoundFault;
    public DescribeUsersResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}