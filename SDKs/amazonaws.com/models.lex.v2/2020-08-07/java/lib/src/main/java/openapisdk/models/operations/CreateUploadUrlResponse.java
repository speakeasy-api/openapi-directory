package openapisdk.models.operations;



public class CreateUploadUrlResponse {
    public Object conflictException;
    public CreateUploadUrlResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateUploadUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUploadUrlResponse createUploadUrlResponse;
    public CreateUploadUrlResponse withCreateUploadUrlResponse(openapisdk.models.shared.CreateUploadUrlResponse createUploadUrlResponse) {
        this.createUploadUrlResponse = createUploadUrlResponse;
        return this;
    }
    public Object internalServerException;
    public CreateUploadUrlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateUploadUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateUploadUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateUploadUrlResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateUploadUrlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}