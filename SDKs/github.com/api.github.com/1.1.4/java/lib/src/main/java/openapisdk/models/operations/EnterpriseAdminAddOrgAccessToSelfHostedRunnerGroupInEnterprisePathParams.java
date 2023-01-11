package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public Long orgId;
    public EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams withOrgId(Long orgId) {
        this.orgId = orgId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
}