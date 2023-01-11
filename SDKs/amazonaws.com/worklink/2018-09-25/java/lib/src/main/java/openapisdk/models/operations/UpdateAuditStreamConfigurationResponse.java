package openapisdk.models.operations;



public class UpdateAuditStreamConfigurationResponse {
    public String contentType;
    public UpdateAuditStreamConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateAuditStreamConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAuditStreamConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAuditStreamConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAuditStreamConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateAuditStreamConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateAuditStreamConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateAuditStreamConfigurationResponse;
    public UpdateAuditStreamConfigurationResponse withUpdateAuditStreamConfigurationResponse(java.util.Map<String, Object> updateAuditStreamConfigurationResponse) {
        this.updateAuditStreamConfigurationResponse = updateAuditStreamConfigurationResponse;
        return this;
    }
}