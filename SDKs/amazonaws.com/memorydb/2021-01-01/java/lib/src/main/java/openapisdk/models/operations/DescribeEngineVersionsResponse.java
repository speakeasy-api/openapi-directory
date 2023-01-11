package openapisdk.models.operations;



public class DescribeEngineVersionsResponse {
    public String contentType;
    public DescribeEngineVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEngineVersionsResponse describeEngineVersionsResponse;
    public DescribeEngineVersionsResponse withDescribeEngineVersionsResponse(openapisdk.models.shared.DescribeEngineVersionsResponse describeEngineVersionsResponse) {
        this.describeEngineVersionsResponse = describeEngineVersionsResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeEngineVersionsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeEngineVersionsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeEngineVersionsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeEngineVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}