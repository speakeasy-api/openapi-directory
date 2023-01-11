package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModelYearDistEntry {
    @JsonProperty("brandName")
    public String brandName;
    public ModelYearDistEntry withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonProperty("modelName")
    public String modelName;
    public ModelYearDistEntry withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonProperty("percentOfMarket")
    public Double percentOfMarket;
    public ModelYearDistEntry withPercentOfMarket(Double percentOfMarket) {
        this.percentOfMarket = percentOfMarket;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public ModelYearDistEntry withYear(Long year) {
        this.year = year;
        return this;
    }
}