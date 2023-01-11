package openapisdk.models.operations;



public class GetConnectivityInfoResponse {
    public Object badRequestException;
    public GetConnectivityInfoResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetConnectivityInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConnectivityInfoResponse getConnectivityInfoResponse;
    public GetConnectivityInfoResponse withGetConnectivityInfoResponse(openapisdk.models.shared.GetConnectivityInfoResponse getConnectivityInfoResponse) {
        this.getConnectivityInfoResponse = getConnectivityInfoResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetConnectivityInfoResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public GetConnectivityInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}