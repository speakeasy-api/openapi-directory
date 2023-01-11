package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TopModelEntry {
    @JsonProperty("brandMarketShare")
    public Double brandMarketShare;
    public TopModelEntry withBrandMarketShare(Double brandMarketShare) {
        this.brandMarketShare = brandMarketShare;
        return this;
    }
    @JsonProperty("brandName")
    public String brandName;
    public TopModelEntry withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonProperty("modelName")
    public String modelName;
    public TopModelEntry withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonProperty("percentOfBrandSales")
    public Double percentOfBrandSales;
    public TopModelEntry withPercentOfBrandSales(Double percentOfBrandSales) {
        this.percentOfBrandSales = percentOfBrandSales;
        return this;
    }
    @JsonProperty("percentOfTopSales")
    public Double percentOfTopSales;
    public TopModelEntry withPercentOfTopSales(Double percentOfTopSales) {
        this.percentOfTopSales = percentOfTopSales;
        return this;
    }
}