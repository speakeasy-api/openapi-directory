package openapisdk.models.operations;



public class GetProtocolsListResponse {
    public String contentType;
    public GetProtocolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProtocolsListResponse getProtocolsListResponse;
    public GetProtocolsListResponse withGetProtocolsListResponse(openapisdk.models.shared.GetProtocolsListResponse getProtocolsListResponse) {
        this.getProtocolsListResponse = getProtocolsListResponse;
        return this;
    }
    public Object internalErrorException;
    public GetProtocolsListResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public GetProtocolsListResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProtocolsListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetProtocolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}