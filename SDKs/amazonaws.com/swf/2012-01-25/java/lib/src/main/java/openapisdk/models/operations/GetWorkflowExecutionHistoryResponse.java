package openapisdk.models.operations;



public class GetWorkflowExecutionHistoryResponse {
    public String contentType;
    public GetWorkflowExecutionHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.History history;
    public GetWorkflowExecutionHistoryResponse withHistory(openapisdk.models.shared.History history) {
        this.history = history;
        return this;
    }
    public Object operationNotPermittedFault;
    public GetWorkflowExecutionHistoryResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public GetWorkflowExecutionHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public GetWorkflowExecutionHistoryResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}