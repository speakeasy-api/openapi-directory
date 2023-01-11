package openapisdk.models.operations;



public class RemoveAttributesResponse {
    public Object badRequestException;
    public RemoveAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public RemoveAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public RemoveAttributesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public RemoveAttributesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public RemoveAttributesResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public RemoveAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public RemoveAttributesResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public openapisdk.models.shared.RemoveAttributesResponse removeAttributesResponse;
    public RemoveAttributesResponse withRemoveAttributesResponse(openapisdk.models.shared.RemoveAttributesResponse removeAttributesResponse) {
        this.removeAttributesResponse = removeAttributesResponse;
        return this;
    }
    public Long statusCode;
    public RemoveAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RemoveAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}