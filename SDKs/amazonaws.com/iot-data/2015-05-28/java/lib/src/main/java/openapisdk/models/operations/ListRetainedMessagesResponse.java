package openapisdk.models.operations;



public class ListRetainedMessagesResponse {
    public String contentType;
    public ListRetainedMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListRetainedMessagesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListRetainedMessagesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListRetainedMessagesResponse listRetainedMessagesResponse;
    public ListRetainedMessagesResponse withListRetainedMessagesResponse(openapisdk.models.shared.ListRetainedMessagesResponse listRetainedMessagesResponse) {
        this.listRetainedMessagesResponse = listRetainedMessagesResponse;
        return this;
    }
    public Object methodNotAllowedException;
    public ListRetainedMessagesResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListRetainedMessagesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListRetainedMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRetainedMessagesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListRetainedMessagesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}