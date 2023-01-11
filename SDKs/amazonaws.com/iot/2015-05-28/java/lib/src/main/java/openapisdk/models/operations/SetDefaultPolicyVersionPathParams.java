package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetDefaultPolicyVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public SetDefaultPolicyVersionPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyVersionId")
    public String policyVersionId;
    public SetDefaultPolicyVersionPathParams withPolicyVersionId(String policyVersionId) {
        this.policyVersionId = policyVersionId;
        return this;
    }
}