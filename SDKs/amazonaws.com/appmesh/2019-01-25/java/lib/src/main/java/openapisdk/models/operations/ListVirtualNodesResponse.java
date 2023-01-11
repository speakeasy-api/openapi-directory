package openapisdk.models.operations;



public class ListVirtualNodesResponse {
    public Object badRequestException;
    public ListVirtualNodesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListVirtualNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListVirtualNodesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListVirtualNodesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListVirtualNodesOutput listVirtualNodesOutput;
    public ListVirtualNodesResponse withListVirtualNodesOutput(openapisdk.models.shared.ListVirtualNodesOutput listVirtualNodesOutput) {
        this.listVirtualNodesOutput = listVirtualNodesOutput;
        return this;
    }
    public Object notFoundException;
    public ListVirtualNodesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListVirtualNodesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListVirtualNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListVirtualNodesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}