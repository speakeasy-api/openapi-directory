package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFulfillmentPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fulfillmentPolicyId")
    public String fulfillmentPolicyId;
    public DeleteFulfillmentPolicyPathParams withFulfillmentPolicyId(String fulfillmentPolicyId) {
        this.fulfillmentPolicyId = fulfillmentPolicyId;
        return this;
    }
}