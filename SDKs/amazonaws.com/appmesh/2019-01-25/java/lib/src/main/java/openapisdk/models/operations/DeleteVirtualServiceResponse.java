package openapisdk.models.operations;



public class DeleteVirtualServiceResponse {
    public Object badRequestException;
    public DeleteVirtualServiceResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteVirtualServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteVirtualServiceOutput deleteVirtualServiceOutput;
    public DeleteVirtualServiceResponse withDeleteVirtualServiceOutput(openapisdk.models.shared.DeleteVirtualServiceOutput deleteVirtualServiceOutput) {
        this.deleteVirtualServiceOutput = deleteVirtualServiceOutput;
        return this;
    }
    public Object forbiddenException;
    public DeleteVirtualServiceResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteVirtualServiceResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DeleteVirtualServiceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteVirtualServiceResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteVirtualServiceResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteVirtualServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteVirtualServiceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}