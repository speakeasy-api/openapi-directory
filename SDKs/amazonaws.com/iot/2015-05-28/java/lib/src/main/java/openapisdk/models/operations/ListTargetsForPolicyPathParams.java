package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTargetsForPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policyName")
    public String policyName;
    public ListTargetsForPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}