package openapisdk.models.operations;



public class AssociateConnectionAliasResponse {
    public Object accessDeniedException;
    public AssociateConnectionAliasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AssociateConnectionAliasResult associateConnectionAliasResult;
    public AssociateConnectionAliasResponse withAssociateConnectionAliasResult(openapisdk.models.shared.AssociateConnectionAliasResult associateConnectionAliasResult) {
        this.associateConnectionAliasResult = associateConnectionAliasResult;
        return this;
    }
    public String contentType;
    public AssociateConnectionAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public AssociateConnectionAliasResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public AssociateConnectionAliasResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public AssociateConnectionAliasResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceAssociatedException;
    public AssociateConnectionAliasResponse withResourceAssociatedException(Object resourceAssociatedException) {
        this.resourceAssociatedException = resourceAssociatedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateConnectionAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateConnectionAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}