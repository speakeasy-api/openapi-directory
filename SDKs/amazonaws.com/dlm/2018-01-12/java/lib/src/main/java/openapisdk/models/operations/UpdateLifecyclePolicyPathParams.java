package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLifecyclePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyId")
    public String policyId;
    public UpdateLifecyclePolicyPathParams withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}