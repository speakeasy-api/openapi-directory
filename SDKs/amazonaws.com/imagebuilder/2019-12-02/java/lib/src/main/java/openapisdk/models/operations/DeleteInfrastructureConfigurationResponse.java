package openapisdk.models.operations;



public class DeleteInfrastructureConfigurationResponse {
    public Object callRateLimitExceededException;
    public DeleteInfrastructureConfigurationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public DeleteInfrastructureConfigurationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteInfrastructureConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteInfrastructureConfigurationResponse deleteInfrastructureConfigurationResponse;
    public DeleteInfrastructureConfigurationResponse withDeleteInfrastructureConfigurationResponse(openapisdk.models.shared.DeleteInfrastructureConfigurationResponse deleteInfrastructureConfigurationResponse) {
        this.deleteInfrastructureConfigurationResponse = deleteInfrastructureConfigurationResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteInfrastructureConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteInfrastructureConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceDependencyException;
    public DeleteInfrastructureConfigurationResponse withResourceDependencyException(Object resourceDependencyException) {
        this.resourceDependencyException = resourceDependencyException;
        return this;
    }
    public Object serviceException;
    public DeleteInfrastructureConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteInfrastructureConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteInfrastructureConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}