package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public DetachPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}