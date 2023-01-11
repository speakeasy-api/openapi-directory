package openapisdk.models.operations;



public class DescribeConnectionAliasesResponse {
    public Object accessDeniedException;
    public DescribeConnectionAliasesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeConnectionAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectionAliasesResult describeConnectionAliasesResult;
    public DescribeConnectionAliasesResponse withDescribeConnectionAliasesResult(openapisdk.models.shared.DescribeConnectionAliasesResult describeConnectionAliasesResult) {
        this.describeConnectionAliasesResult = describeConnectionAliasesResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeConnectionAliasesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object operationNotSupportedException;
    public DescribeConnectionAliasesResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}