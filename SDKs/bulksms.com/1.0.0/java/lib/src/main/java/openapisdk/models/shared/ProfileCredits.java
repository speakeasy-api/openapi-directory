package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfileCredits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Float balance;
    public ProfileCredits withBalance(Float balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTransferAllowed")
    public Boolean isTransferAllowed;
    public ProfileCredits withIsTransferAllowed(Boolean isTransferAllowed) {
        this.isTransferAllowed = isTransferAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public ProfileCredits withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
}