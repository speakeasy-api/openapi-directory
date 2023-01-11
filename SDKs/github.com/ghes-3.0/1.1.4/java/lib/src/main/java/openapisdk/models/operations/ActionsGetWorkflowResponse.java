package openapisdk.models.operations;



public class ActionsGetWorkflowResponse {
    public String contentType;
    public ActionsGetWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Workflow workflow;
    public ActionsGetWorkflowResponse withWorkflow(openapisdk.models.shared.Workflow workflow) {
        this.workflow = workflow;
        return this;
    }
}