package openapisdk.models.operations;



public class DeleteVirtualGatewayResponse {
    public Object badRequestException;
    public DeleteVirtualGatewayResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteVirtualGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteVirtualGatewayOutput deleteVirtualGatewayOutput;
    public DeleteVirtualGatewayResponse withDeleteVirtualGatewayOutput(openapisdk.models.shared.DeleteVirtualGatewayOutput deleteVirtualGatewayOutput) {
        this.deleteVirtualGatewayOutput = deleteVirtualGatewayOutput;
        return this;
    }
    public Object forbiddenException;
    public DeleteVirtualGatewayResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteVirtualGatewayResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DeleteVirtualGatewayResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteVirtualGatewayResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteVirtualGatewayResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteVirtualGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteVirtualGatewayResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}