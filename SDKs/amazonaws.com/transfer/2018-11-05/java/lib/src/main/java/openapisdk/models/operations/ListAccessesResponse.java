package openapisdk.models.operations;



public class ListAccessesResponse {
    public String contentType;
    public ListAccessesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListAccessesResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListAccessesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListAccessesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAccessesResponse listAccessesResponse;
    public ListAccessesResponse withListAccessesResponse(openapisdk.models.shared.ListAccessesResponse listAccessesResponse) {
        this.listAccessesResponse = listAccessesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccessesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListAccessesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListAccessesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}