package openapisdk.models.operations;



public class ListClosedWorkflowExecutionsResponse {
    public String contentType;
    public ListClosedWorkflowExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public ListClosedWorkflowExecutionsResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public ListClosedWorkflowExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public ListClosedWorkflowExecutionsResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowExecutionInfos workflowExecutionInfos;
    public ListClosedWorkflowExecutionsResponse withWorkflowExecutionInfos(openapisdk.models.shared.WorkflowExecutionInfos workflowExecutionInfos) {
        this.workflowExecutionInfos = workflowExecutionInfos;
        return this;
    }
}