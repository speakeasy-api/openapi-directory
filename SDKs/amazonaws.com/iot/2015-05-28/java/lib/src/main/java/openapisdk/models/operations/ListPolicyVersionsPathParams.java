package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPolicyVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public ListPolicyVersionsPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}