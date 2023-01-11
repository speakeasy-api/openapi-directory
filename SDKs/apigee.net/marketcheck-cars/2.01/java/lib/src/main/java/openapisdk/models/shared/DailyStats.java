package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DailyStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom")
    public DailyStatsNestedJson dom;
    public DailyStats withDom(DailyStatsNestedJson dom) {
        this.dom = dom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles_stats")
    public DailyStatsNestedJson milesStats;
    public DailyStats withMilesStats(DailyStatsNestedJson milesStats) {
        this.milesStats = milesStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_stats")
    public DailyStatsNestedJson priceStats;
    public DailyStats withPriceStats(DailyStatsNestedJson priceStats) {
        this.priceStats = priceStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units_for_sale")
    public Double unitsForSale;
    public DailyStats withUnitsForSale(Double unitsForSale) {
        this.unitsForSale = unitsForSale;
        return this;
    }
}