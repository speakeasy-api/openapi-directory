package openapisdk.models.operations;



public class CreateConnectorResponse {
    public Object badRequestException;
    public CreateConnectorResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateConnectorResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateConnectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectorResponse createConnectorResponse;
    public CreateConnectorResponse withCreateConnectorResponse(openapisdk.models.shared.CreateConnectorResponse createConnectorResponse) {
        this.createConnectorResponse = createConnectorResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateConnectorResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateConnectorResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public CreateConnectorResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateConnectorResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateConnectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateConnectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public CreateConnectorResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}