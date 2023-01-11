package openapisdk.models.operations;



public class ActionsGetSelfHostedRunnerForOrgResponse {
    public String contentType;
    public ActionsGetSelfHostedRunnerForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetSelfHostedRunnerForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Runner runner;
    public ActionsGetSelfHostedRunnerForOrgResponse withRunner(openapisdk.models.shared.Runner runner) {
        this.runner = runner;
        return this;
    }
}