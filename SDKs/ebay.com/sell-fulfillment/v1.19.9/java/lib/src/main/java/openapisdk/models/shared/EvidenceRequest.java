package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvidenceRequest
 * This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
**/
public class EvidenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceId")
    public String evidenceId;
    public EvidenceRequest withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceType")
    public String evidenceType;
    public EvidenceRequest withEvidenceType(String evidenceType) {
        this.evidenceType = evidenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderLineItems[] lineItems;
    public EvidenceRequest withLineItems(OrderLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestDate")
    public String requestDate;
    public EvidenceRequest withRequestDate(String requestDate) {
        this.requestDate = requestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondByDate")
    public String respondByDate;
    public EvidenceRequest withRespondByDate(String respondByDate) {
        this.respondByDate = respondByDate;
        return this;
    }
}