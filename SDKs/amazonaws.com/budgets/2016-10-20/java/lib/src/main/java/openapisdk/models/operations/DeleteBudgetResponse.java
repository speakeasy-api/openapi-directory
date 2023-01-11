package openapisdk.models.operations;



public class DeleteBudgetResponse {
    public Object accessDeniedException;
    public DeleteBudgetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteBudgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteBudgetResponse;
    public DeleteBudgetResponse withDeleteBudgetResponse(java.util.Map<String, Object> deleteBudgetResponse) {
        this.deleteBudgetResponse = deleteBudgetResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteBudgetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteBudgetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DeleteBudgetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBudgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}