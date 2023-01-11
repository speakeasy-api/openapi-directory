package openapisdk.models.operations;



public class ListVirtualGatewaysResponse {
    public Object badRequestException;
    public ListVirtualGatewaysResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListVirtualGatewaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListVirtualGatewaysResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListVirtualGatewaysResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListVirtualGatewaysOutput listVirtualGatewaysOutput;
    public ListVirtualGatewaysResponse withListVirtualGatewaysOutput(openapisdk.models.shared.ListVirtualGatewaysOutput listVirtualGatewaysOutput) {
        this.listVirtualGatewaysOutput = listVirtualGatewaysOutput;
        return this;
    }
    public Object notFoundException;
    public ListVirtualGatewaysResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListVirtualGatewaysResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListVirtualGatewaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListVirtualGatewaysResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}