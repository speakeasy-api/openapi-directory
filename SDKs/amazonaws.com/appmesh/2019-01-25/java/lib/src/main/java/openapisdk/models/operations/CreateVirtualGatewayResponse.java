package openapisdk.models.operations;



public class CreateVirtualGatewayResponse {
    public Object badRequestException;
    public CreateVirtualGatewayResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateVirtualGatewayResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateVirtualGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVirtualGatewayOutput createVirtualGatewayOutput;
    public CreateVirtualGatewayResponse withCreateVirtualGatewayOutput(openapisdk.models.shared.CreateVirtualGatewayOutput createVirtualGatewayOutput) {
        this.createVirtualGatewayOutput = createVirtualGatewayOutput;
        return this;
    }
    public Object forbiddenException;
    public CreateVirtualGatewayResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateVirtualGatewayResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public CreateVirtualGatewayResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateVirtualGatewayResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateVirtualGatewayResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateVirtualGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateVirtualGatewayResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}