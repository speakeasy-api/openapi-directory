package openapisdk.models.operations;



public class DescribeResourceGroupsResponse {
    public String contentType;
    public DescribeResourceGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourceGroupsResponse describeResourceGroupsResponse;
    public DescribeResourceGroupsResponse withDescribeResourceGroupsResponse(openapisdk.models.shared.DescribeResourceGroupsResponse describeResourceGroupsResponse) {
        this.describeResourceGroupsResponse = describeResourceGroupsResponse;
        return this;
    }
    public Object internalException;
    public DescribeResourceGroupsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeResourceGroupsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeResourceGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}