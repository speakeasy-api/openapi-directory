package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingSummary
 * The type that defines the fields for the price details for an item.
**/
public class PricingSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auctionReservePrice")
    public Amount auctionReservePrice;
    public PricingSummary withAuctionReservePrice(Amount auctionReservePrice) {
        this.auctionReservePrice = auctionReservePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auctionStartPrice")
    public Amount auctionStartPrice;
    public PricingSummary withAuctionStartPrice(Amount auctionStartPrice) {
        this.auctionStartPrice = auctionStartPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Amount price;
    public PricingSummary withPrice(Amount price) {
        this.price = price;
        return this;
    }
}