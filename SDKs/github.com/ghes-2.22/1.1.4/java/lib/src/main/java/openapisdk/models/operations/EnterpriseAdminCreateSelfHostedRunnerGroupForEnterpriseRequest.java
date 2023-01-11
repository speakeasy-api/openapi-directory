package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest {
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams pathParams;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest withPathParams(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody request;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest withRequest(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody request) {
        this.request = request;
        return this;
    }
}