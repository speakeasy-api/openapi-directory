package openapisdk.models.operations;



public class CountPendingDecisionTasksResponse {
    public String contentType;
    public CountPendingDecisionTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public CountPendingDecisionTasksResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public openapisdk.models.shared.PendingTaskCount pendingTaskCount;
    public CountPendingDecisionTasksResponse withPendingTaskCount(openapisdk.models.shared.PendingTaskCount pendingTaskCount) {
        this.pendingTaskCount = pendingTaskCount;
        return this;
    }
    public Long statusCode;
    public CountPendingDecisionTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public CountPendingDecisionTasksResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}