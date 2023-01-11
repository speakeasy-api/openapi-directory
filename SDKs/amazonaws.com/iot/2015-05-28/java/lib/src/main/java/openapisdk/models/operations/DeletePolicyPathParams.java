package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public DeletePolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}