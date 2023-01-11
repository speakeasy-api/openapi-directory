package openapisdk.models.operations;



public class CreateScriptResponse {
    public Object conflictException;
    public CreateScriptResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateScriptOutput createScriptOutput;
    public CreateScriptResponse withCreateScriptOutput(openapisdk.models.shared.CreateScriptOutput createScriptOutput) {
        this.createScriptOutput = createScriptOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateScriptResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateScriptResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public CreateScriptResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unauthorizedException;
    public CreateScriptResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}