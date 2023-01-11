package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public CreatePolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}