package openapisdk.models.operations;



public class ListEndpointsResponse {
    public String contentType;
    public ListEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEndpointsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListEndpointsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse;
    public ListEndpointsResponse withListEndpointsResponse(openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse) {
        this.listEndpointsResponse = listEndpointsResponse;
        return this;
    }
    public Long statusCode;
    public ListEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEndpointsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}