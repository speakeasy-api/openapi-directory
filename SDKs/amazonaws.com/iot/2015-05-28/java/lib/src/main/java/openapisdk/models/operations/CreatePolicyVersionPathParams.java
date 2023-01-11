package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePolicyVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public CreatePolicyVersionPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}