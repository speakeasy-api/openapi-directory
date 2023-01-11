package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Order
 * This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
**/
public class Order {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public Buyer buyer;
    public Order withBuyer(Buyer buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerCheckoutNotes")
    public String buyerCheckoutNotes;
    public Order withBuyerCheckoutNotes(String buyerCheckoutNotes) {
        this.buyerCheckoutNotes = buyerCheckoutNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelStatus")
    public CancelStatus cancelStatus;
    public Order withCancelStatus(CancelStatus cancelStatus) {
        this.cancelStatus = cancelStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public Order withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebayCollectAndRemitTax")
    public Boolean ebayCollectAndRemitTax;
    public Order withEbayCollectAndRemitTax(Boolean ebayCollectAndRemitTax) {
        this.ebayCollectAndRemitTax = ebayCollectAndRemitTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentHrefs")
    public String[] fulfillmentHrefs;
    public Order withFulfillmentHrefs(String[] fulfillmentHrefs) {
        this.fulfillmentHrefs = fulfillmentHrefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentStartInstructions")
    public FulfillmentStartInstruction[] fulfillmentStartInstructions;
    public Order withFulfillmentStartInstructions(FulfillmentStartInstruction[] fulfillmentStartInstructions) {
        this.fulfillmentStartInstructions = fulfillmentStartInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedDate")
    public String lastModifiedDate;
    public Order withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyOrderId")
    public String legacyOrderId;
    public Order withLegacyOrderId(String legacyOrderId) {
        this.legacyOrderId = legacyOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public LineItem[] lineItems;
    public Order withLineItems(LineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderFulfillmentStatus")
    public String orderFulfillmentStatus;
    public Order withOrderFulfillmentStatus(String orderFulfillmentStatus) {
        this.orderFulfillmentStatus = orderFulfillmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public Order withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderPaymentStatus")
    public String orderPaymentStatus;
    public Order withOrderPaymentStatus(String orderPaymentStatus) {
        this.orderPaymentStatus = orderPaymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentSummary")
    public PaymentSummary paymentSummary;
    public Order withPaymentSummary(PaymentSummary paymentSummary) {
        this.paymentSummary = paymentSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingSummary")
    public PricingSummary pricingSummary;
    public Order withPricingSummary(PricingSummary pricingSummary) {
        this.pricingSummary = pricingSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("program")
    public Program program;
    public Order withProgram(Program program) {
        this.program = program;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesRecordReference")
    public String salesRecordReference;
    public Order withSalesRecordReference(String salesRecordReference) {
        this.salesRecordReference = salesRecordReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerId")
    public String sellerId;
    public Order withSellerId(String sellerId) {
        this.sellerId = sellerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFeeBasisAmount")
    public Amount totalFeeBasisAmount;
    public Order withTotalFeeBasisAmount(Amount totalFeeBasisAmount) {
        this.totalFeeBasisAmount = totalFeeBasisAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalMarketplaceFee")
    public Amount totalMarketplaceFee;
    public Order withTotalMarketplaceFee(Amount totalMarketplaceFee) {
        this.totalMarketplaceFee = totalMarketplaceFee;
        return this;
    }
}