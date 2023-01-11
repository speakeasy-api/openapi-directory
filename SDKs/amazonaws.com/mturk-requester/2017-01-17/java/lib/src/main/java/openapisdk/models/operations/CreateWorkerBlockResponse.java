package openapisdk.models.operations;



public class CreateWorkerBlockResponse {
    public String contentType;
    public CreateWorkerBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createWorkerBlockResponse;
    public CreateWorkerBlockResponse withCreateWorkerBlockResponse(java.util.Map<String, Object> createWorkerBlockResponse) {
        this.createWorkerBlockResponse = createWorkerBlockResponse;
        return this;
    }
    public Object requestError;
    public CreateWorkerBlockResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public CreateWorkerBlockResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public CreateWorkerBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}