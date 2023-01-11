package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SimilarSalePriceData {
    @JsonProperty("daysBack")
    public Long daysBack;
    public SimilarSalePriceData withDaysBack(Long daysBack) {
        this.daysBack = daysBack;
        return this;
    }
    @JsonProperty("mileCount")
    public Long mileCount;
    public SimilarSalePriceData withMileCount(Long mileCount) {
        this.mileCount = mileCount;
        return this;
    }
    @JsonProperty("milesAvg")
    public Double milesAvg;
    public SimilarSalePriceData withMilesAvg(Double milesAvg) {
        this.milesAvg = milesAvg;
        return this;
    }
    @JsonProperty("milesStdDev")
    public Double milesStdDev;
    public SimilarSalePriceData withMilesStdDev(Double milesStdDev) {
        this.milesStdDev = milesStdDev;
        return this;
    }
    @JsonProperty("newCount")
    public Long newCount;
    public SimilarSalePriceData withNewCount(Long newCount) {
        this.newCount = newCount;
        return this;
    }
    @JsonProperty("newSaleAvg")
    public Double newSaleAvg;
    public SimilarSalePriceData withNewSaleAvg(Double newSaleAvg) {
        this.newSaleAvg = newSaleAvg;
        return this;
    }
    @JsonProperty("newSaleStdDev")
    public Double newSaleStdDev;
    public SimilarSalePriceData withNewSaleStdDev(Double newSaleStdDev) {
        this.newSaleStdDev = newSaleStdDev;
        return this;
    }
    @JsonProperty("usedCount")
    public Long usedCount;
    public SimilarSalePriceData withUsedCount(Long usedCount) {
        this.usedCount = usedCount;
        return this;
    }
    @JsonProperty("usedSaleAvg")
    public Double usedSaleAvg;
    public SimilarSalePriceData withUsedSaleAvg(Double usedSaleAvg) {
        this.usedSaleAvg = usedSaleAvg;
        return this;
    }
    @JsonProperty("usedSaleStdDev")
    public Double usedSaleStdDev;
    public SimilarSalePriceData withUsedSaleStdDev(Double usedSaleStdDev) {
        this.usedSaleStdDev = usedSaleStdDev;
        return this;
    }
}