package openapisdk.models.operations;



public class DescribeWorkflowTypeResponse {
    public String contentType;
    public DescribeWorkflowTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public DescribeWorkflowTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DescribeWorkflowTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public DescribeWorkflowTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowTypeDetail workflowTypeDetail;
    public DescribeWorkflowTypeResponse withWorkflowTypeDetail(openapisdk.models.shared.WorkflowTypeDetail workflowTypeDetail) {
        this.workflowTypeDetail = workflowTypeDetail;
        return this;
    }
}