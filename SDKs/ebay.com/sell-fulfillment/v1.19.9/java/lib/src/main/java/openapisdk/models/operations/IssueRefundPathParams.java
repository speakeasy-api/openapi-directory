package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssueRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=order_id")
    public String orderId;
    public IssueRefundPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}