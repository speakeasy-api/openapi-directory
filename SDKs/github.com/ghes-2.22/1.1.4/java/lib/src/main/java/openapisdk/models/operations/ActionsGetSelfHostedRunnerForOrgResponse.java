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
    public openapisdk.models.shared.RunnerNoLabels runnerNoLabels;
    public ActionsGetSelfHostedRunnerForOrgResponse withRunnerNoLabels(openapisdk.models.shared.RunnerNoLabels runnerNoLabels) {
        this.runnerNoLabels = runnerNoLabels;
        return this;
    }
}