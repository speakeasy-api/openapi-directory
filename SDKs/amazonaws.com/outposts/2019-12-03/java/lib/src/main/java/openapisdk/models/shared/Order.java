package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Order
 * Information about an order.
**/
public class Order {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineItems")
    public LineItem[] lineItems;
    public Order withLineItems(LineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("OrderFulfilledDate")
    public OffsetDateTime orderFulfilledDate;
    public Order withOrderFulfilledDate(OffsetDateTime orderFulfilledDate) {
        this.orderFulfilledDate = orderFulfilledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderId")
    public String orderId;
    public Order withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("OrderSubmissionDate")
    public OffsetDateTime orderSubmissionDate;
    public Order withOrderSubmissionDate(OffsetDateTime orderSubmissionDate) {
        this.orderSubmissionDate = orderSubmissionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutpostId")
    public String outpostId;
    public Order withOutpostId(String outpostId) {
        this.outpostId = outpostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentOption")
    public PaymentOptionEnum paymentOption;
    public Order withPaymentOption(PaymentOptionEnum paymentOption) {
        this.paymentOption = paymentOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public OrderStatusEnum status;
    public Order withStatus(OrderStatusEnum status) {
        this.status = status;
        return this;
    }
}