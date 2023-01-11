package openapisdk.models.operations;



public class CreateEntityRecognizerResponse {
    public String contentType;
    public CreateEntityRecognizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEntityRecognizerResponse createEntityRecognizerResponse;
    public CreateEntityRecognizerResponse withCreateEntityRecognizerResponse(openapisdk.models.shared.CreateEntityRecognizerResponse createEntityRecognizerResponse) {
        this.createEntityRecognizerResponse = createEntityRecognizerResponse;
        return this;
    }
    public Object internalServerException;
    public CreateEntityRecognizerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreateEntityRecognizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public CreateEntityRecognizerResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public Object resourceInUseException;
    public CreateEntityRecognizerResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateEntityRecognizerResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEntityRecognizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEntityRecognizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public CreateEntityRecognizerResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object unsupportedLanguageException;
    public CreateEntityRecognizerResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}