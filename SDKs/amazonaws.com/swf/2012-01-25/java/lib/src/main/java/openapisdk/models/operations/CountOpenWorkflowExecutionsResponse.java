package openapisdk.models.operations;



public class CountOpenWorkflowExecutionsResponse {
    public String contentType;
    public CountOpenWorkflowExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public CountOpenWorkflowExecutionsResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public CountOpenWorkflowExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public CountOpenWorkflowExecutionsResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowExecutionCount workflowExecutionCount;
    public CountOpenWorkflowExecutionsResponse withWorkflowExecutionCount(openapisdk.models.shared.WorkflowExecutionCount workflowExecutionCount) {
        this.workflowExecutionCount = workflowExecutionCount;
        return this;
    }
}