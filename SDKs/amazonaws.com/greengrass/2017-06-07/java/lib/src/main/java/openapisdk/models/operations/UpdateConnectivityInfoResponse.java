package openapisdk.models.operations;



public class UpdateConnectivityInfoResponse {
    public Object badRequestException;
    public UpdateConnectivityInfoResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateConnectivityInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateConnectivityInfoResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public UpdateConnectivityInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateConnectivityInfoResponse updateConnectivityInfoResponse;
    public UpdateConnectivityInfoResponse withUpdateConnectivityInfoResponse(openapisdk.models.shared.UpdateConnectivityInfoResponse updateConnectivityInfoResponse) {
        this.updateConnectivityInfoResponse = updateConnectivityInfoResponse;
        return this;
    }
}