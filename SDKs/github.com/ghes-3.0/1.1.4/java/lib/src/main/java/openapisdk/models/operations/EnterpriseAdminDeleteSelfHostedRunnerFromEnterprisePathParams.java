package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}