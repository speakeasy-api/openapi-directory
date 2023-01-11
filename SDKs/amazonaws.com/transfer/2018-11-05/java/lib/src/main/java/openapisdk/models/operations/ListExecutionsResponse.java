package openapisdk.models.operations;



public class ListExecutionsResponse {
    public String contentType;
    public ListExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListExecutionsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListExecutionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse;
    public ListExecutionsResponse withListExecutionsResponse(openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse) {
        this.listExecutionsResponse = listExecutionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListExecutionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListExecutionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}