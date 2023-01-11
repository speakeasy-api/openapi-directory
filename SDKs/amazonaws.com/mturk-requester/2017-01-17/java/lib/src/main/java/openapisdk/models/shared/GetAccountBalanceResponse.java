package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountBalanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailableBalance")
    public String availableBalance;
    public GetAccountBalanceResponse withAvailableBalance(String availableBalance) {
        this.availableBalance = availableBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnHoldBalance")
    public String onHoldBalance;
    public GetAccountBalanceResponse withOnHoldBalance(String onHoldBalance) {
        this.onHoldBalance = onHoldBalance;
        return this;
    }
}