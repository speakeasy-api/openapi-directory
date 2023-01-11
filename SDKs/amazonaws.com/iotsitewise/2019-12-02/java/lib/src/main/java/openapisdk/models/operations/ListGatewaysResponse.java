package openapisdk.models.operations;



public class ListGatewaysResponse {
    public String contentType;
    public ListGatewaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListGatewaysResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListGatewaysResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListGatewaysResponse listGatewaysResponse;
    public ListGatewaysResponse withListGatewaysResponse(openapisdk.models.shared.ListGatewaysResponse listGatewaysResponse) {
        this.listGatewaysResponse = listGatewaysResponse;
        return this;
    }
    public Long statusCode;
    public ListGatewaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListGatewaysResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}