package openapisdk.models.operations;



public class DescribeAcLsResponse {
    public Object aclNotFoundFault;
    public DescribeAcLsResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public String contentType;
    public DescribeAcLsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAcLsResponse describeACLsResponse;
    public DescribeAcLsResponse withDescribeAcLsResponse(openapisdk.models.shared.DescribeAcLsResponse describeACLsResponse) {
        this.describeACLsResponse = describeACLsResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeAcLsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Long statusCode;
    public DescribeAcLsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}