/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade - Details of the FX trade (if applicable)
 */
public class GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade {
    /**
     * amount of buyCurrency being bought
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyAmount")
    public Long buyAmount;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withBuyAmount(Long buyAmount) {
        this.buyAmount = buyAmount;
        return this;
    }
    
    /**
     * currency which is being bought
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyCurrency")
    public String buyCurrency;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withBuyCurrency(String buyCurrency) {
        this.buyCurrency = buyCurrency;
        return this;
    }
    
    /**
     * type of trade - BUY or SELL
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedSide")
    public String fixedSide;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withFixedSide(String fixedSide) {
        this.fixedSide = fixedSide;
        return this;
    }
    
    /**
     * The FX provider used to make the trade.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    
    /**
     * exchange rate
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate4d")
    public Long rate4d;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withRate4d(Long rate4d) {
        this.rate4d = rate4d;
        return this;
    }
    
    /**
     * amount of sellCurrency being sold
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellAmount")
    public Long sellAmount;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withSellAmount(Long sellAmount) {
        this.sellAmount = sellAmount;
        return this;
    }
    
    /**
     * currency which is being sold
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellCurrency")
    public String sellCurrency;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade withSellCurrency(String sellCurrency) {
        this.sellCurrency = sellCurrency;
        return this;
    }
    
    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionFxTrade(){}
}
