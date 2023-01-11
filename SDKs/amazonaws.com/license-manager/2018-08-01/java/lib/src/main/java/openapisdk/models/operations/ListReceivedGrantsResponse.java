package openapisdk.models.operations;



public class ListReceivedGrantsResponse {
    public Object accessDeniedException;
    public ListReceivedGrantsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListReceivedGrantsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListReceivedGrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListReceivedGrantsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListReceivedGrantsResponse listReceivedGrantsResponse;
    public ListReceivedGrantsResponse withListReceivedGrantsResponse(openapisdk.models.shared.ListReceivedGrantsResponse listReceivedGrantsResponse) {
        this.listReceivedGrantsResponse = listReceivedGrantsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListReceivedGrantsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public ListReceivedGrantsResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListReceivedGrantsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListReceivedGrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListReceivedGrantsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}