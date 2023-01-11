package openapisdk.models.operations;



public class DeleteVirtualRouterResponse {
    public Object badRequestException;
    public DeleteVirtualRouterResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteVirtualRouterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteVirtualRouterOutput deleteVirtualRouterOutput;
    public DeleteVirtualRouterResponse withDeleteVirtualRouterOutput(openapisdk.models.shared.DeleteVirtualRouterOutput deleteVirtualRouterOutput) {
        this.deleteVirtualRouterOutput = deleteVirtualRouterOutput;
        return this;
    }
    public Object forbiddenException;
    public DeleteVirtualRouterResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteVirtualRouterResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DeleteVirtualRouterResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteVirtualRouterResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteVirtualRouterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteVirtualRouterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteVirtualRouterResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}