package openapisdk.models.operations;



public class UpdateVirtualGatewayResponse {
    public Object badRequestException;
    public UpdateVirtualGatewayResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateVirtualGatewayResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateVirtualGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateVirtualGatewayResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateVirtualGatewayResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public UpdateVirtualGatewayResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateVirtualGatewayResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateVirtualGatewayResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateVirtualGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateVirtualGatewayResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateVirtualGatewayOutput updateVirtualGatewayOutput;
    public UpdateVirtualGatewayResponse withUpdateVirtualGatewayOutput(openapisdk.models.shared.UpdateVirtualGatewayOutput updateVirtualGatewayOutput) {
        this.updateVirtualGatewayOutput = updateVirtualGatewayOutput;
        return this;
    }
}