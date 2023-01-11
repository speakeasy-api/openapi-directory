package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasePopular
 * Single popular car in array
**/
public class BasePopular {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public BasePopular withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public String counts;
    public BasePopular withCounts(String counts) {
        this.counts = counts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_stats")
    public SalesStats domStats;
    public BasePopular withDomStats(SalesStats domStats) {
        this.domStats = domStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryType")
    public String inventoryType;
    public BasePopular withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public BasePopular withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles_stats")
    public SalesStats milesStats;
    public BasePopular withMilesStats(SalesStats milesStats) {
        this.milesStats = milesStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public BasePopular withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_stats")
    public SalesStats priceStats;
    public BasePopular withPriceStats(SalesStats priceStats) {
        this.priceStats = priceStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public BasePopular withState(String state) {
        this.state = state;
        return this;
    }
}