package openapisdk.models.operations;



public class CreateAccessResponse {
    public String contentType;
    public CreateAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAccessResponse createAccessResponse;
    public CreateAccessResponse withCreateAccessResponse(openapisdk.models.shared.CreateAccessResponse createAccessResponse) {
        this.createAccessResponse = createAccessResponse;
        return this;
    }
    public Object internalServiceError;
    public CreateAccessResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public CreateAccessResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceExistsException;
    public CreateAccessResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateAccessResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}