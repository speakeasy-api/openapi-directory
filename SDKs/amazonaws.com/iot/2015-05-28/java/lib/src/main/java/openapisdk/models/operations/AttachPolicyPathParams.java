package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public AttachPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}