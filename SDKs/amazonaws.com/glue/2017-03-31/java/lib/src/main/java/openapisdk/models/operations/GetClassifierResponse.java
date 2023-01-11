package openapisdk.models.operations;



public class GetClassifierResponse {
    public String contentType;
    public GetClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetClassifierResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetClassifierResponse getClassifierResponse;
    public GetClassifierResponse withGetClassifierResponse(openapisdk.models.shared.GetClassifierResponse getClassifierResponse) {
        this.getClassifierResponse = getClassifierResponse;
        return this;
    }
    public Object operationTimeoutException;
    public GetClassifierResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}