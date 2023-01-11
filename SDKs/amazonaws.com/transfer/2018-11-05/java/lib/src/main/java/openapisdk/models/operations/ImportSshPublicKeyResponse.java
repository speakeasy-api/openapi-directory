package openapisdk.models.operations;



public class ImportSshPublicKeyResponse {
    public String contentType;
    public ImportSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportSshPublicKeyResponse importSshPublicKeyResponse;
    public ImportSshPublicKeyResponse withImportSshPublicKeyResponse(openapisdk.models.shared.ImportSshPublicKeyResponse importSshPublicKeyResponse) {
        this.importSshPublicKeyResponse = importSshPublicKeyResponse;
        return this;
    }
    public Object internalServiceError;
    public ImportSshPublicKeyResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ImportSshPublicKeyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceExistsException;
    public ImportSshPublicKeyResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportSshPublicKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ImportSshPublicKeyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ImportSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ImportSshPublicKeyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}