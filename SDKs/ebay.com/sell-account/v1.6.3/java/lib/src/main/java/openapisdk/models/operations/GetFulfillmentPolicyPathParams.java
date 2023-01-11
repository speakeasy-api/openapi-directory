package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFulfillmentPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fulfillmentPolicyId")
    public String fulfillmentPolicyId;
    public GetFulfillmentPolicyPathParams withFulfillmentPolicyId(String fulfillmentPolicyId) {
        this.fulfillmentPolicyId = fulfillmentPolicyId;
        return this;
    }
}