package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLifecyclePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyId")
    public String policyId;
    public DeleteLifecyclePolicyPathParams withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}