package openapisdk.models.operations;



public class DescribeWorkflowExecutionResponse {
    public String contentType;
    public DescribeWorkflowExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public DescribeWorkflowExecutionResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DescribeWorkflowExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public DescribeWorkflowExecutionResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowExecutionDetail workflowExecutionDetail;
    public DescribeWorkflowExecutionResponse withWorkflowExecutionDetail(openapisdk.models.shared.WorkflowExecutionDetail workflowExecutionDetail) {
        this.workflowExecutionDetail = workflowExecutionDetail;
        return this;
    }
}