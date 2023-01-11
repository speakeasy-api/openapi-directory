package openapisdk.models.operations;



public class StartFleetResponse {
    public Object concurrentModificationException;
    public StartFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public StartFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidAccountStatusException;
    public StartFleetResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidRoleException;
    public StartFleetResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public StartFleetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public StartFleetResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object requestLimitExceededException;
    public StartFleetResponse withRequestLimitExceededException(Object requestLimitExceededException) {
        this.requestLimitExceededException = requestLimitExceededException;
        return this;
    }
    public Object resourceNotAvailableException;
    public StartFleetResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> startFleetResult;
    public StartFleetResponse withStartFleetResult(java.util.Map<String, Object> startFleetResult) {
        this.startFleetResult = startFleetResult;
        return this;
    }
    public Long statusCode;
    public StartFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}