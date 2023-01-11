package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetStatisticsCharging200ApplicationJsonKw
 * Aggregate statistics for charge rate in kW
**/
public class GetStatisticsCharging200ApplicationJsonKw {
    @JsonProperty("max")
    public Double max;
    public GetStatisticsCharging200ApplicationJsonKw withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("mean")
    public Double mean;
    public GetStatisticsCharging200ApplicationJsonKw withMean(Double mean) {
        this.mean = mean;
        return this;
    }
    @JsonProperty("min")
    public Double min;
    public GetStatisticsCharging200ApplicationJsonKw withMin(Double min) {
        this.min = min;
        return this;
    }
}