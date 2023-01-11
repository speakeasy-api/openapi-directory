package openapisdk.models.operations;



public class ListResourceInventoryResponse {
    public Object accessDeniedException;
    public ListResourceInventoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListResourceInventoryResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListResourceInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object failedDependencyException;
    public ListResourceInventoryResponse withFailedDependencyException(Object failedDependencyException) {
        this.failedDependencyException = failedDependencyException;
        return this;
    }
    public Object filterLimitExceededException;
    public ListResourceInventoryResponse withFilterLimitExceededException(Object filterLimitExceededException) {
        this.filterLimitExceededException = filterLimitExceededException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListResourceInventoryResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListResourceInventoryResponse listResourceInventoryResponse;
    public ListResourceInventoryResponse withListResourceInventoryResponse(openapisdk.models.shared.ListResourceInventoryResponse listResourceInventoryResponse) {
        this.listResourceInventoryResponse = listResourceInventoryResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListResourceInventoryResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListResourceInventoryResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListResourceInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}