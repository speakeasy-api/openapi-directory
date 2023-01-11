package openapisdk.models.operations;



public class DeleteVirtualNodeResponse {
    public Object badRequestException;
    public DeleteVirtualNodeResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteVirtualNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteVirtualNodeOutput deleteVirtualNodeOutput;
    public DeleteVirtualNodeResponse withDeleteVirtualNodeOutput(openapisdk.models.shared.DeleteVirtualNodeOutput deleteVirtualNodeOutput) {
        this.deleteVirtualNodeOutput = deleteVirtualNodeOutput;
        return this;
    }
    public Object forbiddenException;
    public DeleteVirtualNodeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteVirtualNodeResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DeleteVirtualNodeResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteVirtualNodeResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteVirtualNodeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteVirtualNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteVirtualNodeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}