package openapisdk.models.operations;



public class ListDistributedGrantsResponse {
    public Object accessDeniedException;
    public ListDistributedGrantsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListDistributedGrantsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListDistributedGrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListDistributedGrantsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListDistributedGrantsResponse listDistributedGrantsResponse;
    public ListDistributedGrantsResponse withListDistributedGrantsResponse(openapisdk.models.shared.ListDistributedGrantsResponse listDistributedGrantsResponse) {
        this.listDistributedGrantsResponse = listDistributedGrantsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListDistributedGrantsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public ListDistributedGrantsResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListDistributedGrantsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListDistributedGrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListDistributedGrantsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}