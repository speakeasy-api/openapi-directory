package openapisdk.models.operations;



public class UpdateIntegrationResponse {
    public Object badRequestException;
    public UpdateIntegrationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateIntegrationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateIntegrationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateIntegrationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateIntegrationResult updateIntegrationResult;
    public UpdateIntegrationResponse withUpdateIntegrationResult(openapisdk.models.shared.UpdateIntegrationResult updateIntegrationResult) {
        this.updateIntegrationResult = updateIntegrationResult;
        return this;
    }
}