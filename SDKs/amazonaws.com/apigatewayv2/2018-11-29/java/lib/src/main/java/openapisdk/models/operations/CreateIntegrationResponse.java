package openapisdk.models.operations;



public class CreateIntegrationResponse {
    public Object badRequestException;
    public CreateIntegrationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateIntegrationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateIntegrationResult createIntegrationResult;
    public CreateIntegrationResponse withCreateIntegrationResult(openapisdk.models.shared.CreateIntegrationResult createIntegrationResult) {
        this.createIntegrationResult = createIntegrationResult;
        return this;
    }
    public Object notFoundException;
    public CreateIntegrationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateIntegrationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}