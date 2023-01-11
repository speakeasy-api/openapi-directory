package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDispute
 * This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
**/
public class PaymentDispute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public SimpleAmount amount;
    public PaymentDispute withAmount(SimpleAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableChoices")
    public String[] availableChoices;
    public PaymentDispute withAvailableChoices(String[] availableChoices) {
        this.availableChoices = availableChoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerProvided")
    public InfoFromBuyer buyerProvided;
    public PaymentDispute withBuyerProvided(InfoFromBuyer buyerProvided) {
        this.buyerProvided = buyerProvided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerUsername")
    public String buyerUsername;
    public PaymentDispute withBuyerUsername(String buyerUsername) {
        this.buyerUsername = buyerUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closedDate")
    public String closedDate;
    public PaymentDispute withClosedDate(String closedDate) {
        this.closedDate = closedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence")
    public DisputeEvidence[] evidence;
    public PaymentDispute withEvidence(DisputeEvidence[] evidence) {
        this.evidence = evidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceRequests")
    public EvidenceRequest[] evidenceRequests;
    public PaymentDispute withEvidenceRequests(EvidenceRequest[] evidenceRequests) {
        this.evidenceRequests = evidenceRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderLineItems[] lineItems;
    public PaymentDispute withLineItems(OrderLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monetaryTransactions")
    public MonetaryTransaction[] monetaryTransactions;
    public PaymentDispute withMonetaryTransactions(MonetaryTransaction[] monetaryTransactions) {
        this.monetaryTransactions = monetaryTransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openDate")
    public String openDate;
    public PaymentDispute withOpenDate(String openDate) {
        this.openDate = openDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public PaymentDispute withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDisputeId")
    public String paymentDisputeId;
    public PaymentDispute withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDisputeStatus")
    public String paymentDisputeStatus;
    public PaymentDispute withPaymentDisputeStatus(String paymentDisputeStatus) {
        this.paymentDisputeStatus = paymentDisputeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public PaymentDispute withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public PaymentDisputeOutcomeDetail resolution;
    public PaymentDispute withResolution(PaymentDisputeOutcomeDetail resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondByDate")
    public String respondByDate;
    public PaymentDispute withRespondByDate(String respondByDate) {
        this.respondByDate = respondByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnAddress")
    public ReturnAddress returnAddress;
    public PaymentDispute withReturnAddress(ReturnAddress returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Integer revision;
    public PaymentDispute withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerResponse")
    public String sellerResponse;
    public PaymentDispute withSellerResponse(String sellerResponse) {
        this.sellerResponse = sellerResponse;
        return this;
    }
}