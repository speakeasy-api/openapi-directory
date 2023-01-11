package openapisdk.models.operations;



public class DescribeClientPropertiesResponse {
    public Object accessDeniedException;
    public DescribeClientPropertiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeClientPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClientPropertiesResult describeClientPropertiesResult;
    public DescribeClientPropertiesResponse withDescribeClientPropertiesResult(openapisdk.models.shared.DescribeClientPropertiesResult describeClientPropertiesResult) {
        this.describeClientPropertiesResult = describeClientPropertiesResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeClientPropertiesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeClientPropertiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeClientPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}