package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}