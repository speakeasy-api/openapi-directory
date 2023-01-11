package openapisdk.models.operations;



public class CreateBudgetActionResponse {
    public Object accessDeniedException;
    public CreateBudgetActionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateBudgetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBudgetActionResponse createBudgetActionResponse;
    public CreateBudgetActionResponse withCreateBudgetActionResponse(openapisdk.models.shared.CreateBudgetActionResponse createBudgetActionResponse) {
        this.createBudgetActionResponse = createBudgetActionResponse;
        return this;
    }
    public Object creationLimitExceededException;
    public CreateBudgetActionResponse withCreationLimitExceededException(Object creationLimitExceededException) {
        this.creationLimitExceededException = creationLimitExceededException;
        return this;
    }
    public Object duplicateRecordException;
    public CreateBudgetActionResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    public Object internalErrorException;
    public CreateBudgetActionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateBudgetActionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public CreateBudgetActionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBudgetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}