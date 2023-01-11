package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayoutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payout_Id")
    public String payoutId;
    public GetPayoutPathParams withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}