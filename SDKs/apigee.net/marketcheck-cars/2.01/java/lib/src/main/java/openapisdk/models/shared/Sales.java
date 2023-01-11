package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sales
 * Sales count query response
**/
public class Sales {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Sales withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public Long counts;
    public Sales withCounts(Long counts) {
        this.counts = counts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpo")
    public Long cpo;
    public Sales withCpo(Long cpo) {
        this.cpo = cpo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_stats")
    public SalesStats domStats;
    public Sales withDomStats(SalesStats domStats) {
        this.domStats = domStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory_type")
    public String inventoryType;
    public Sales withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public Sales withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles_stats")
    public SalesStats milesStats;
    public Sales withMilesStats(SalesStats milesStats) {
        this.milesStats = milesStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public Sales withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non-cpo")
    public Long nonCpo;
    public Sales withNonCpo(Long nonCpo) {
        this.nonCpo = nonCpo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_stats")
    public SalesStats priceStats;
    public Sales withPriceStats(SalesStats priceStats) {
        this.priceStats = priceStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Sales withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomy_vin")
    public String taxonomyVin;
    public Sales withTaxonomyVin(String taxonomyVin) {
        this.taxonomyVin = taxonomyVin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public String trim;
    public Sales withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public Sales withYear(String year) {
        this.year = year;
        return this;
    }
}