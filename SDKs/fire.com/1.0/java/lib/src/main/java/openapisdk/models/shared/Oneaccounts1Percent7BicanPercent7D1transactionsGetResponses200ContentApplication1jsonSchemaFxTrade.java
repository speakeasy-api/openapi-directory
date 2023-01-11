package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyAmount")
    public Long buyAmount;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade withBuyAmount(Long buyAmount) {
        this.buyAmount = buyAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyCurrency")
    public String buyCurrency;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade withBuyCurrency(String buyCurrency) {
        this.buyCurrency = buyCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedSide")
    public String fixedSide;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade withFixedSide(String fixedSide) {
        this.fixedSide = fixedSide;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate4d")
    public Long rate4d;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade withRate4d(Long rate4d) {
        this.rate4d = rate4d;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellAmount")
    public Long sellAmount;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade withSellAmount(Long sellAmount) {
        this.sellAmount = sellAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellCurrency")
    public String sellCurrency;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade withSellCurrency(String sellCurrency) {
        this.sellCurrency = sellCurrency;
        return this;
    }
}