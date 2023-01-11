package openapisdk.models.operations;



public class CreateBuildResponse {
    public Object conflictException;
    public CreateBuildResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBuildOutput createBuildOutput;
    public CreateBuildResponse withCreateBuildOutput(openapisdk.models.shared.CreateBuildOutput createBuildOutput) {
        this.createBuildOutput = createBuildOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateBuildResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateBuildResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public CreateBuildResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unauthorizedException;
    public CreateBuildResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}