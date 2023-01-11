package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLifecyclePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyId")
    public String policyId;
    public GetLifecyclePolicyPathParams withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}