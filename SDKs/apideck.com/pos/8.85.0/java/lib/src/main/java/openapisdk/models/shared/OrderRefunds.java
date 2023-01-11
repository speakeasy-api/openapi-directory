package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderRefunds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public OrderRefunds withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public OrderRefunds withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderRefunds withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public OrderRefunds withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrderRefunds withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderRefundsStatusEnum status;
    public OrderRefunds withStatus(OrderRefundsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tender_id")
    public String tenderId;
    public OrderRefunds withTenderId(String tenderId) {
        this.tenderId = tenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public OrderRefunds withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}