package openapisdk.models.operations;



public class ActionsGetWorkflowUsageResponse {
    public String contentType;
    public ActionsGetWorkflowUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetWorkflowUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowUsage workflowUsage;
    public ActionsGetWorkflowUsageResponse withWorkflowUsage(openapisdk.models.shared.WorkflowUsage workflowUsage) {
        this.workflowUsage = workflowUsage;
        return this;
    }
}