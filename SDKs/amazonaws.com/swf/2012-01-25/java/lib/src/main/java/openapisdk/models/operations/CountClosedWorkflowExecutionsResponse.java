package openapisdk.models.operations;



public class CountClosedWorkflowExecutionsResponse {
    public String contentType;
    public CountClosedWorkflowExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public CountClosedWorkflowExecutionsResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public CountClosedWorkflowExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public CountClosedWorkflowExecutionsResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowExecutionCount workflowExecutionCount;
    public CountClosedWorkflowExecutionsResponse withWorkflowExecutionCount(openapisdk.models.shared.WorkflowExecutionCount workflowExecutionCount) {
        this.workflowExecutionCount = workflowExecutionCount;
        return this;
    }
}