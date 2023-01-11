package openapisdk.models.operations;



public class ListOpenWorkflowExecutionsResponse {
    public String contentType;
    public ListOpenWorkflowExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public ListOpenWorkflowExecutionsResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public ListOpenWorkflowExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public ListOpenWorkflowExecutionsResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowExecutionInfos workflowExecutionInfos;
    public ListOpenWorkflowExecutionsResponse withWorkflowExecutionInfos(openapisdk.models.shared.WorkflowExecutionInfos workflowExecutionInfos) {
        this.workflowExecutionInfos = workflowExecutionInfos;
        return this;
    }
}