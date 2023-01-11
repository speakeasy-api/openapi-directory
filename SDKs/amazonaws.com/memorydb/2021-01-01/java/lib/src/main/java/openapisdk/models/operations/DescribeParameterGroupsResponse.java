package openapisdk.models.operations;



public class DescribeParameterGroupsResponse {
    public String contentType;
    public DescribeParameterGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeParameterGroupsResponse describeParameterGroupsResponse;
    public DescribeParameterGroupsResponse withDescribeParameterGroupsResponse(openapisdk.models.shared.DescribeParameterGroupsResponse describeParameterGroupsResponse) {
        this.describeParameterGroupsResponse = describeParameterGroupsResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeParameterGroupsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeParameterGroupsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public DescribeParameterGroupsResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeParameterGroupsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeParameterGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}