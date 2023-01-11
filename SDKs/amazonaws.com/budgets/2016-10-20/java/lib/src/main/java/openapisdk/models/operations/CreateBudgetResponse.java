package openapisdk.models.operations;



public class CreateBudgetResponse {
    public Object accessDeniedException;
    public CreateBudgetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateBudgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createBudgetResponse;
    public CreateBudgetResponse withCreateBudgetResponse(java.util.Map<String, Object> createBudgetResponse) {
        this.createBudgetResponse = createBudgetResponse;
        return this;
    }
    public Object creationLimitExceededException;
    public CreateBudgetResponse withCreationLimitExceededException(Object creationLimitExceededException) {
        this.creationLimitExceededException = creationLimitExceededException;
        return this;
    }
    public Object duplicateRecordException;
    public CreateBudgetResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    public Object internalErrorException;
    public CreateBudgetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateBudgetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public CreateBudgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}