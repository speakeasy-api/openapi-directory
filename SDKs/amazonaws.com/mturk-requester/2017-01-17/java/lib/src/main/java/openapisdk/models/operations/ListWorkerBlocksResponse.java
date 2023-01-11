package openapisdk.models.operations;



public class ListWorkerBlocksResponse {
    public String contentType;
    public ListWorkerBlocksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkerBlocksResponse listWorkerBlocksResponse;
    public ListWorkerBlocksResponse withListWorkerBlocksResponse(openapisdk.models.shared.ListWorkerBlocksResponse listWorkerBlocksResponse) {
        this.listWorkerBlocksResponse = listWorkerBlocksResponse;
        return this;
    }
    public Object requestError;
    public ListWorkerBlocksResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListWorkerBlocksResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListWorkerBlocksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}