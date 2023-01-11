package openapisdk.models.operations;



public class CreateConnectionAliasResponse {
    public Object accessDeniedException;
    public CreateConnectionAliasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateConnectionAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectionAliasResult createConnectionAliasResult;
    public CreateConnectionAliasResponse withCreateConnectionAliasResult(openapisdk.models.shared.CreateConnectionAliasResult createConnectionAliasResult) {
        this.createConnectionAliasResult = createConnectionAliasResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public CreateConnectionAliasResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public CreateConnectionAliasResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public CreateConnectionAliasResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateConnectionAliasResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateConnectionAliasResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateConnectionAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}