package openapisdk.models.operations;



public class CreateIntegrationResponseResponse {
    public Object badRequestException;
    public CreateIntegrationResponseResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateIntegrationResponseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateIntegrationResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateIntegrationResponseResponse createIntegrationResponseResponse;
    public CreateIntegrationResponseResponse withCreateIntegrationResponseResponse(openapisdk.models.shared.CreateIntegrationResponseResponse createIntegrationResponseResponse) {
        this.createIntegrationResponseResponse = createIntegrationResponseResponse;
        return this;
    }
    public Object notFoundException;
    public CreateIntegrationResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateIntegrationResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateIntegrationResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}