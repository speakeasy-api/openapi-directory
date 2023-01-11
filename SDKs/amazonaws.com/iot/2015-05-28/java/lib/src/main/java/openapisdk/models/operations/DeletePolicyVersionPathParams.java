package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePolicyVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public DeletePolicyVersionPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyVersionId")
    public String policyVersionId;
    public DeletePolicyVersionPathParams withPolicyVersionId(String policyVersionId) {
        this.policyVersionId = policyVersionId;
        return this;
    }
}