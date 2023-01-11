package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReturnPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=return_policy_id")
    public String returnPolicyId;
    public UpdateReturnPolicyPathParams withReturnPolicyId(String returnPolicyId) {
        this.returnPolicyId = returnPolicyId;
        return this;
    }
}