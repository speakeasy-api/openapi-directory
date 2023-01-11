package openapisdk.models.operations;



public class ActionsGetJobForWorkflowRunResponse {
    public String contentType;
    public ActionsGetJobForWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetJobForWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public ActionsGetJobForWorkflowRunResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
}