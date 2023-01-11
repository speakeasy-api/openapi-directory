package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachPrincipalPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public AttachPrincipalPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}