package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostSaleAuthenticationProgram
 * This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
**/
public class PostSaleAuthenticationProgram {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcomeReason")
    public String outcomeReason;
    public PostSaleAuthenticationProgram withOutcomeReason(String outcomeReason) {
        this.outcomeReason = outcomeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PostSaleAuthenticationProgram withStatus(String status) {
        this.status = status;
        return this;
    }
}