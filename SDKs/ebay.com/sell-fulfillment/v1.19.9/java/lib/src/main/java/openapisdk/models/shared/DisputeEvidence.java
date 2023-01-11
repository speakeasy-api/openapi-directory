package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisputeEvidence
 * This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
**/
public class DisputeEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceId")
    public String evidenceId;
    public DisputeEvidence withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceType")
    public String evidenceType;
    public DisputeEvidence withEvidenceType(String evidenceType) {
        this.evidenceType = evidenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public FileInfo[] files;
    public DisputeEvidence withFiles(FileInfo[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderLineItems[] lineItems;
    public DisputeEvidence withLineItems(OrderLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providedDate")
    public String providedDate;
    public DisputeEvidence withProvidedDate(String providedDate) {
        this.providedDate = providedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestDate")
    public String requestDate;
    public DisputeEvidence withRequestDate(String requestDate) {
        this.requestDate = requestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondByDate")
    public String respondByDate;
    public DisputeEvidence withRespondByDate(String respondByDate) {
        this.respondByDate = respondByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentTracking")
    public TrackingInfo[] shipmentTracking;
    public DisputeEvidence withShipmentTracking(TrackingInfo[] shipmentTracking) {
        this.shipmentTracking = shipmentTracking;
        return this;
    }
}