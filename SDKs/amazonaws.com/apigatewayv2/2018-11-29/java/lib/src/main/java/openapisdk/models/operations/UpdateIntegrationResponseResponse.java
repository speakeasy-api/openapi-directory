package openapisdk.models.operations;



public class UpdateIntegrationResponseResponse {
    public Object badRequestException;
    public UpdateIntegrationResponseResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateIntegrationResponseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateIntegrationResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateIntegrationResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateIntegrationResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateIntegrationResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateIntegrationResponseResponse updateIntegrationResponseResponse;
    public UpdateIntegrationResponseResponse withUpdateIntegrationResponseResponse(openapisdk.models.shared.UpdateIntegrationResponseResponse updateIntegrationResponseResponse) {
        this.updateIntegrationResponseResponse = updateIntegrationResponseResponse;
        return this;
    }
}