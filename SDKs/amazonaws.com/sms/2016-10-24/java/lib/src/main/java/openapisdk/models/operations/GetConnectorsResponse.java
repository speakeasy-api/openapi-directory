package openapisdk.models.operations;



public class GetConnectorsResponse {
    public String contentType;
    public GetConnectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConnectorsResponse getConnectorsResponse;
    public GetConnectorsResponse withGetConnectorsResponse(openapisdk.models.shared.GetConnectorsResponse getConnectorsResponse) {
        this.getConnectorsResponse = getConnectorsResponse;
        return this;
    }
    public Long statusCode;
    public GetConnectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetConnectorsResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}