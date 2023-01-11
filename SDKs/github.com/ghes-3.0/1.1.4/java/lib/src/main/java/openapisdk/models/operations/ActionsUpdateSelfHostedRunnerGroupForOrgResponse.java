package openapisdk.models.operations;



public class ActionsUpdateSelfHostedRunnerGroupForOrgResponse {
    public String contentType;
    public ActionsUpdateSelfHostedRunnerGroupForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsUpdateSelfHostedRunnerGroupForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerGroupsOrg runnerGroupsOrg;
    public ActionsUpdateSelfHostedRunnerGroupForOrgResponse withRunnerGroupsOrg(openapisdk.models.shared.RunnerGroupsOrg runnerGroupsOrg) {
        this.runnerGroupsOrg = runnerGroupsOrg;
        return this;
    }
}