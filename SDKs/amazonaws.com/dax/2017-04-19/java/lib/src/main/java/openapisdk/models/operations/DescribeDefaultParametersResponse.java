package openapisdk.models.operations;



public class DescribeDefaultParametersResponse {
    public String contentType;
    public DescribeDefaultParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDefaultParametersResponse describeDefaultParametersResponse;
    public DescribeDefaultParametersResponse withDescribeDefaultParametersResponse(openapisdk.models.shared.DescribeDefaultParametersResponse describeDefaultParametersResponse) {
        this.describeDefaultParametersResponse = describeDefaultParametersResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeDefaultParametersResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeDefaultParametersResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeDefaultParametersResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeDefaultParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}