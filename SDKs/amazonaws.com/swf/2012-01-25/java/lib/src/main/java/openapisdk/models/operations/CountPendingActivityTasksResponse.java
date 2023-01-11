package openapisdk.models.operations;



public class CountPendingActivityTasksResponse {
    public String contentType;
    public CountPendingActivityTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public CountPendingActivityTasksResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public openapisdk.models.shared.PendingTaskCount pendingTaskCount;
    public CountPendingActivityTasksResponse withPendingTaskCount(openapisdk.models.shared.PendingTaskCount pendingTaskCount) {
        this.pendingTaskCount = pendingTaskCount;
        return this;
    }
    public Long statusCode;
    public CountPendingActivityTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public CountPendingActivityTasksResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}