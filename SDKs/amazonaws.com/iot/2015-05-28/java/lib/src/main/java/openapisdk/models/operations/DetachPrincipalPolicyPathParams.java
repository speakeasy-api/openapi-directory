package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachPrincipalPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public DetachPrincipalPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}