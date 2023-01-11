package openapisdk.models.operations;



public class ListVirtualRoutersResponse {
    public Object badRequestException;
    public ListVirtualRoutersResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListVirtualRoutersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListVirtualRoutersResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListVirtualRoutersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListVirtualRoutersOutput listVirtualRoutersOutput;
    public ListVirtualRoutersResponse withListVirtualRoutersOutput(openapisdk.models.shared.ListVirtualRoutersOutput listVirtualRoutersOutput) {
        this.listVirtualRoutersOutput = listVirtualRoutersOutput;
        return this;
    }
    public Object notFoundException;
    public ListVirtualRoutersResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListVirtualRoutersResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListVirtualRoutersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListVirtualRoutersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}