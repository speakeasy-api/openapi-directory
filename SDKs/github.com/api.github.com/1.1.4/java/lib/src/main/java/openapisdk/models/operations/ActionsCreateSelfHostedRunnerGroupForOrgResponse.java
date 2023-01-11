package openapisdk.models.operations;



public class ActionsCreateSelfHostedRunnerGroupForOrgResponse {
    public String contentType;
    public ActionsCreateSelfHostedRunnerGroupForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsCreateSelfHostedRunnerGroupForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerGroupsOrg runnerGroupsOrg;
    public ActionsCreateSelfHostedRunnerGroupForOrgResponse withRunnerGroupsOrg(openapisdk.models.shared.RunnerGroupsOrg runnerGroupsOrg) {
        this.runnerGroupsOrg = runnerGroupsOrg;
        return this;
    }
}