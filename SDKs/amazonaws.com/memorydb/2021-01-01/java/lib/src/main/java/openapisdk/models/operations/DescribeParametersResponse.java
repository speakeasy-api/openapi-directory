package openapisdk.models.operations;



public class DescribeParametersResponse {
    public String contentType;
    public DescribeParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeParametersResponse describeParametersResponse;
    public DescribeParametersResponse withDescribeParametersResponse(openapisdk.models.shared.DescribeParametersResponse describeParametersResponse) {
        this.describeParametersResponse = describeParametersResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeParametersResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeParametersResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public DescribeParametersResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeParametersResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}