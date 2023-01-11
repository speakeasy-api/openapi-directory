package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFulfillmentPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fulfillmentPolicyId")
    public String fulfillmentPolicyId;
    public UpdateFulfillmentPolicyPathParams withFulfillmentPolicyId(String fulfillmentPolicyId) {
        this.fulfillmentPolicyId = fulfillmentPolicyId;
        return this;
    }
}