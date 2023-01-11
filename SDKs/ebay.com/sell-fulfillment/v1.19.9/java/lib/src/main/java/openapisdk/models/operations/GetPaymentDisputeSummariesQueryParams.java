package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentDisputeSummariesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=buyer_username")
    public String buyerUsername;
    public GetPaymentDisputeSummariesQueryParams withBuyerUsername(String buyerUsername) {
        this.buyerUsername = buyerUsername;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetPaymentDisputeSummariesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetPaymentDisputeSummariesQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=open_date_from")
    public String openDateFrom;
    public GetPaymentDisputeSummariesQueryParams withOpenDateFrom(String openDateFrom) {
        this.openDateFrom = openDateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=open_date_to")
    public String openDateTo;
    public GetPaymentDisputeSummariesQueryParams withOpenDateTo(String openDateTo) {
        this.openDateTo = openDateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_id")
    public String orderId;
    public GetPaymentDisputeSummariesQueryParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payment_dispute_status")
    public String paymentDisputeStatus;
    public GetPaymentDisputeSummariesQueryParams withPaymentDisputeStatus(String paymentDisputeStatus) {
        this.paymentDisputeStatus = paymentDisputeStatus;
        return this;
    }
}