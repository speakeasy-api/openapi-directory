package openapisdk.models.operations;



public class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerGroupsEnterprise runnerGroupsEnterprise;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse withRunnerGroupsEnterprise(openapisdk.models.shared.RunnerGroupsEnterprise runnerGroupsEnterprise) {
        this.runnerGroupsEnterprise = runnerGroupsEnterprise;
        return this;
    }
}