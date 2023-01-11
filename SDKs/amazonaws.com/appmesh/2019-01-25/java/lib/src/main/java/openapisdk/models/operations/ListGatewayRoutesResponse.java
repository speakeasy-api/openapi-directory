package openapisdk.models.operations;



public class ListGatewayRoutesResponse {
    public Object badRequestException;
    public ListGatewayRoutesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListGatewayRoutesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListGatewayRoutesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListGatewayRoutesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListGatewayRoutesOutput listGatewayRoutesOutput;
    public ListGatewayRoutesResponse withListGatewayRoutesOutput(openapisdk.models.shared.ListGatewayRoutesOutput listGatewayRoutesOutput) {
        this.listGatewayRoutesOutput = listGatewayRoutesOutput;
        return this;
    }
    public Object notFoundException;
    public ListGatewayRoutesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListGatewayRoutesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListGatewayRoutesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListGatewayRoutesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}