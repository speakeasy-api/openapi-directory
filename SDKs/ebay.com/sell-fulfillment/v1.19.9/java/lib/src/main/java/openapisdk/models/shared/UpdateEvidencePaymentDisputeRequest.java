package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEvidencePaymentDisputeRequest
 * This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
**/
public class UpdateEvidencePaymentDisputeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceId")
    public String evidenceId;
    public UpdateEvidencePaymentDisputeRequest withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceType")
    public String evidenceType;
    public UpdateEvidencePaymentDisputeRequest withEvidenceType(String evidenceType) {
        this.evidenceType = evidenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public FileEvidence[] files;
    public UpdateEvidencePaymentDisputeRequest withFiles(FileEvidence[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderLineItems[] lineItems;
    public UpdateEvidencePaymentDisputeRequest withLineItems(OrderLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
}