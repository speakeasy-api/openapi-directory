package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonetaryTransaction
 * This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
**/
public class MonetaryTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public DisputeAmount amount;
    public MonetaryTransaction withAmount(DisputeAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public MonetaryTransaction withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public MonetaryTransaction withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MonetaryTransaction withType(String type) {
        this.type = type;
        return this;
    }
}