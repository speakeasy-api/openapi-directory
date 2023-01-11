package openapisdk.models.operations;



public class DescribeConnectionAliasPermissionsResponse {
    public Object accessDeniedException;
    public DescribeConnectionAliasPermissionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeConnectionAliasPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectionAliasPermissionsResult describeConnectionAliasPermissionsResult;
    public DescribeConnectionAliasPermissionsResponse withDescribeConnectionAliasPermissionsResult(openapisdk.models.shared.DescribeConnectionAliasPermissionsResult describeConnectionAliasPermissionsResult) {
        this.describeConnectionAliasPermissionsResult = describeConnectionAliasPermissionsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeConnectionAliasPermissionsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object operationNotSupportedException;
    public DescribeConnectionAliasPermissionsResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeConnectionAliasPermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionAliasPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}