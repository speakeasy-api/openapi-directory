package openapisdk.models.operations;



public class ActionsGetWorkflowRunUsageResponse {
    public String contentType;
    public ActionsGetWorkflowRunUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetWorkflowRunUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowRunUsage workflowRunUsage;
    public ActionsGetWorkflowRunUsageResponse withWorkflowRunUsage(openapisdk.models.shared.WorkflowRunUsage workflowRunUsage) {
        this.workflowRunUsage = workflowRunUsage;
        return this;
    }
}