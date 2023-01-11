package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReturnPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=return_policy_id")
    public String returnPolicyId;
    public DeleteReturnPolicyPathParams withReturnPolicyId(String returnPolicyId) {
        this.returnPolicyId = returnPolicyId;
        return this;
    }
}