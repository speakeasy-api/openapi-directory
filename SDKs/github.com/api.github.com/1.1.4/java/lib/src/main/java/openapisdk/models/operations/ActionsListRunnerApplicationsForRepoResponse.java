package openapisdk.models.operations;



public class ActionsListRunnerApplicationsForRepoResponse {
    public String contentType;
    public ActionsListRunnerApplicationsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsListRunnerApplicationsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerApplication[] runnerApplications;
    public ActionsListRunnerApplicationsForRepoResponse withRunnerApplications(openapisdk.models.shared.RunnerApplication[] runnerApplications) {
        this.runnerApplications = runnerApplications;
        return this;
    }
}