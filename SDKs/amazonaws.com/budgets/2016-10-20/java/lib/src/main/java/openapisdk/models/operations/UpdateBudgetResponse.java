package openapisdk.models.operations;



public class UpdateBudgetResponse {
    public Object accessDeniedException;
    public UpdateBudgetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateBudgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateBudgetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateBudgetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public UpdateBudgetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBudgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateBudgetResponse;
    public UpdateBudgetResponse withUpdateBudgetResponse(java.util.Map<String, Object> updateBudgetResponse) {
        this.updateBudgetResponse = updateBudgetResponse;
        return this;
    }
}