package openapisdk.models.operations;



public class GetOperationResponse {
    public String contentType;
    public GetOperationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOperationResponse getOperationResponse;
    public GetOperationResponse withGetOperationResponse(openapisdk.models.shared.GetOperationResponse getOperationResponse) {
        this.getOperationResponse = getOperationResponse;
        return this;
    }
    public Object invalidInput;
    public GetOperationResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationNotFound;
    public GetOperationResponse withOperationNotFound(Object operationNotFound) {
        this.operationNotFound = operationNotFound;
        return this;
    }
    public Long statusCode;
    public GetOperationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}