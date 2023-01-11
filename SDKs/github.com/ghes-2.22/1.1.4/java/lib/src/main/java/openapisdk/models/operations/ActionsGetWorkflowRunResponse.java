package openapisdk.models.operations;



public class ActionsGetWorkflowRunResponse {
    public String contentType;
    public ActionsGetWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowRun workflowRun;
    public ActionsGetWorkflowRunResponse withWorkflowRun(openapisdk.models.shared.WorkflowRun workflowRun) {
        this.workflowRun = workflowRun;
        return this;
    }
}