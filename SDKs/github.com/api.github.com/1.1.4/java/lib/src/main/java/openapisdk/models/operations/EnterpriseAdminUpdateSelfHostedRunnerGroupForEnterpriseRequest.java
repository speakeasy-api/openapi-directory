package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest {
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams pathParams;
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest withPathParams(EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody request;
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest withRequest(EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody request) {
        this.request = request;
        return this;
    }
}