package openapisdk.models.operations;



public class EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerNoLabels runnerNoLabels;
    public EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse withRunnerNoLabels(openapisdk.models.shared.RunnerNoLabels runnerNoLabels) {
        this.runnerNoLabels = runnerNoLabels;
        return this;
    }
}