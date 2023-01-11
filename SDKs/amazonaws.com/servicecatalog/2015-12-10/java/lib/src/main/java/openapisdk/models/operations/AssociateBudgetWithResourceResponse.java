package openapisdk.models.operations;



public class AssociateBudgetWithResourceResponse {
    public java.util.Map<String, Object> associateBudgetWithResourceOutput;
    public AssociateBudgetWithResourceResponse withAssociateBudgetWithResourceOutput(java.util.Map<String, Object> associateBudgetWithResourceOutput) {
        this.associateBudgetWithResourceOutput = associateBudgetWithResourceOutput;
        return this;
    }
    public String contentType;
    public AssociateBudgetWithResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateResourceException;
    public AssociateBudgetWithResourceResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object invalidParametersException;
    public AssociateBudgetWithResourceResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public AssociateBudgetWithResourceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateBudgetWithResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateBudgetWithResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}