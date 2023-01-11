package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddEvidencePaymentDisputeRequest
 * This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
**/
public class AddEvidencePaymentDisputeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceType")
    public String evidenceType;
    public AddEvidencePaymentDisputeRequest withEvidenceType(String evidenceType) {
        this.evidenceType = evidenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public FileEvidence[] files;
    public AddEvidencePaymentDisputeRequest withFiles(FileEvidence[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderLineItems[] lineItems;
    public AddEvidencePaymentDisputeRequest withLineItems(OrderLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
}