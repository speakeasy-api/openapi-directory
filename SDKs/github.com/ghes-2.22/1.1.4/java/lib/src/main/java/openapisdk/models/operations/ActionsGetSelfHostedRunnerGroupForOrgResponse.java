package openapisdk.models.operations;



public class ActionsGetSelfHostedRunnerGroupForOrgResponse {
    public String contentType;
    public ActionsGetSelfHostedRunnerGroupForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetSelfHostedRunnerGroupForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerGroupsOrg runnerGroupsOrg;
    public ActionsGetSelfHostedRunnerGroupForOrgResponse withRunnerGroupsOrg(openapisdk.models.shared.RunnerGroupsOrg runnerGroupsOrg) {
        this.runnerGroupsOrg = runnerGroupsOrg;
        return this;
    }
}