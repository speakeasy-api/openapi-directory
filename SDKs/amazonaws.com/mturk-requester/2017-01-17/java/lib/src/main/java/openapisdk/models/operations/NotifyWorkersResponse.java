package openapisdk.models.operations;



public class NotifyWorkersResponse {
    public String contentType;
    public NotifyWorkersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotifyWorkersResponse notifyWorkersResponse;
    public NotifyWorkersResponse withNotifyWorkersResponse(openapisdk.models.shared.NotifyWorkersResponse notifyWorkersResponse) {
        this.notifyWorkersResponse = notifyWorkersResponse;
        return this;
    }
    public Object requestError;
    public NotifyWorkersResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public NotifyWorkersResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public NotifyWorkersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}