package openapisdk.models.operations;



public class CreateDocumentClassifierResponse {
    public String contentType;
    public CreateDocumentClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDocumentClassifierResponse createDocumentClassifierResponse;
    public CreateDocumentClassifierResponse withCreateDocumentClassifierResponse(openapisdk.models.shared.CreateDocumentClassifierResponse createDocumentClassifierResponse) {
        this.createDocumentClassifierResponse = createDocumentClassifierResponse;
        return this;
    }
    public Object internalServerException;
    public CreateDocumentClassifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreateDocumentClassifierResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public CreateDocumentClassifierResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public Object resourceInUseException;
    public CreateDocumentClassifierResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateDocumentClassifierResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateDocumentClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateDocumentClassifierResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public CreateDocumentClassifierResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object unsupportedLanguageException;
    public CreateDocumentClassifierResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}