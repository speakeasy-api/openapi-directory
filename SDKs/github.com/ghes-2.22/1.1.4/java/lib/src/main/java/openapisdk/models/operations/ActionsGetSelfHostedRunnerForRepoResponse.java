package openapisdk.models.operations;



public class ActionsGetSelfHostedRunnerForRepoResponse {
    public String contentType;
    public ActionsGetSelfHostedRunnerForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetSelfHostedRunnerForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerNoLabels runnerNoLabels;
    public ActionsGetSelfHostedRunnerForRepoResponse withRunnerNoLabels(openapisdk.models.shared.RunnerNoLabels runnerNoLabels) {
        this.runnerNoLabels = runnerNoLabels;
        return this;
    }
}