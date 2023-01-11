package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderRefundsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public OrderRefundsInput withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public OrderRefundsInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrderRefundsInput withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderRefundsStatusEnum status;
    public OrderRefundsInput withStatus(OrderRefundsStatusEnum status) {
        this.status = status;
        return this;
    }
}