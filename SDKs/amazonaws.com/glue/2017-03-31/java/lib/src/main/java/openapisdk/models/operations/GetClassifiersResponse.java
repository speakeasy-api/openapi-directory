package openapisdk.models.operations;



public class GetClassifiersResponse {
    public String contentType;
    public GetClassifiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetClassifiersResponse getClassifiersResponse;
    public GetClassifiersResponse withGetClassifiersResponse(openapisdk.models.shared.GetClassifiersResponse getClassifiersResponse) {
        this.getClassifiersResponse = getClassifiersResponse;
        return this;
    }
    public Object operationTimeoutException;
    public GetClassifiersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetClassifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}