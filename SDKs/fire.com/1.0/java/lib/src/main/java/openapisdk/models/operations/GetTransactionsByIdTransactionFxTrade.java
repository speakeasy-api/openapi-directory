package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionFxTrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyAmount")
    public Long buyAmount;
    public GetTransactionsByIdTransactionFxTrade withBuyAmount(Long buyAmount) {
        this.buyAmount = buyAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyCurrency")
    public String buyCurrency;
    public GetTransactionsByIdTransactionFxTrade withBuyCurrency(String buyCurrency) {
        this.buyCurrency = buyCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedSide")
    public String fixedSide;
    public GetTransactionsByIdTransactionFxTrade withFixedSide(String fixedSide) {
        this.fixedSide = fixedSide;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate4d")
    public Long rate4d;
    public GetTransactionsByIdTransactionFxTrade withRate4d(Long rate4d) {
        this.rate4d = rate4d;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellAmount")
    public Long sellAmount;
    public GetTransactionsByIdTransactionFxTrade withSellAmount(Long sellAmount) {
        this.sellAmount = sellAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellCurrency")
    public String sellCurrency;
    public GetTransactionsByIdTransactionFxTrade withSellCurrency(String sellCurrency) {
        this.sellCurrency = sellCurrency;
        return this;
    }
}