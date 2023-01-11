package openapisdk.models.operations;



public class UpdateApplicationSettingsResponse {
    public Object badRequestException;
    public UpdateApplicationSettingsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateApplicationSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateApplicationSettingsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateApplicationSettingsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public UpdateApplicationSettingsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public UpdateApplicationSettingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public UpdateApplicationSettingsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateApplicationSettingsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateApplicationSettingsResponse updateApplicationSettingsResponse;
    public UpdateApplicationSettingsResponse withUpdateApplicationSettingsResponse(openapisdk.models.shared.UpdateApplicationSettingsResponse updateApplicationSettingsResponse) {
        this.updateApplicationSettingsResponse = updateApplicationSettingsResponse;
        return this;
    }
}