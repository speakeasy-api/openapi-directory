package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddEvidencePaymentDisputeResponse
 * This type is used by the response payload of the addEvidence method. Its only field is an unique identifier of an evidence set.
**/
public class AddEvidencePaymentDisputeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceId")
    public String evidenceId;
    public AddEvidencePaymentDisputeResponse withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
}