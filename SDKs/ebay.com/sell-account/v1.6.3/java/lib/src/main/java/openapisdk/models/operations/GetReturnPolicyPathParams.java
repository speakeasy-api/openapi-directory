package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReturnPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=return_policy_id")
    public String returnPolicyId;
    public GetReturnPolicyPathParams withReturnPolicyId(String returnPolicyId) {
        this.returnPolicyId = returnPolicyId;
        return this;
    }
}