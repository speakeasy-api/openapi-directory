package openapisdk.models.operations;



public class GetDataflowGraphResponse {
    public String contentType;
    public GetDataflowGraphResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataflowGraphResponse getDataflowGraphResponse;
    public GetDataflowGraphResponse withGetDataflowGraphResponse(openapisdk.models.shared.GetDataflowGraphResponse getDataflowGraphResponse) {
        this.getDataflowGraphResponse = getDataflowGraphResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDataflowGraphResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetDataflowGraphResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetDataflowGraphResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetDataflowGraphResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}