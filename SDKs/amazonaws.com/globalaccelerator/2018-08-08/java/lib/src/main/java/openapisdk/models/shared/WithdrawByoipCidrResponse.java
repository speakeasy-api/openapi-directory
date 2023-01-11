package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WithdrawByoipCidrResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ByoipCidr")
    public ByoipCidr byoipCidr;
    public WithdrawByoipCidrResponse withByoipCidr(ByoipCidr byoipCidr) {
        this.byoipCidr = byoipCidr;
        return this;
    }
}