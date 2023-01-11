package openapisdk.models.operations;



public class ListWorkflowTypesResponse {
    public String contentType;
    public ListWorkflowTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public ListWorkflowTypesResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public ListWorkflowTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public ListWorkflowTypesResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public openapisdk.models.shared.WorkflowTypeInfos workflowTypeInfos;
    public ListWorkflowTypesResponse withWorkflowTypeInfos(openapisdk.models.shared.WorkflowTypeInfos workflowTypeInfos) {
        this.workflowTypeInfos = workflowTypeInfos;
        return this;
    }
}