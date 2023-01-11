package openapisdk.models.operations;



public class ListVirtualServicesResponse {
    public Object badRequestException;
    public ListVirtualServicesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListVirtualServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListVirtualServicesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListVirtualServicesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListVirtualServicesOutput listVirtualServicesOutput;
    public ListVirtualServicesResponse withListVirtualServicesOutput(openapisdk.models.shared.ListVirtualServicesOutput listVirtualServicesOutput) {
        this.listVirtualServicesOutput = listVirtualServicesOutput;
        return this;
    }
    public Object notFoundException;
    public ListVirtualServicesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListVirtualServicesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListVirtualServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListVirtualServicesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}