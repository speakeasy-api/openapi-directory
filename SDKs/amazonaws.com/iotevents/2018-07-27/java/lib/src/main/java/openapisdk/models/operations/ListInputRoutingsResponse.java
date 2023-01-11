package openapisdk.models.operations;



public class ListInputRoutingsResponse {
    public String contentType;
    public ListInputRoutingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListInputRoutingsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListInputRoutingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListInputRoutingsResponse listInputRoutingsResponse;
    public ListInputRoutingsResponse withListInputRoutingsResponse(openapisdk.models.shared.ListInputRoutingsResponse listInputRoutingsResponse) {
        this.listInputRoutingsResponse = listInputRoutingsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListInputRoutingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListInputRoutingsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListInputRoutingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInputRoutingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}