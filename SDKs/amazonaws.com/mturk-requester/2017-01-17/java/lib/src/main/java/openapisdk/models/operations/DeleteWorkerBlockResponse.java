package openapisdk.models.operations;



public class DeleteWorkerBlockResponse {
    public String contentType;
    public DeleteWorkerBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWorkerBlockResponse;
    public DeleteWorkerBlockResponse withDeleteWorkerBlockResponse(java.util.Map<String, Object> deleteWorkerBlockResponse) {
        this.deleteWorkerBlockResponse = deleteWorkerBlockResponse;
        return this;
    }
    public Object requestError;
    public DeleteWorkerBlockResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public DeleteWorkerBlockResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public DeleteWorkerBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}