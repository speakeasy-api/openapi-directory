package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetStatisticsCharging200ApplicationJsonPrice
 * Aggregate statistics for power price (<CURRENCY> per kWh)
**/
public class GetStatisticsCharging200ApplicationJsonPrice {
    @JsonProperty("max")
    public Double max;
    public GetStatisticsCharging200ApplicationJsonPrice withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("mean")
    public Double mean;
    public GetStatisticsCharging200ApplicationJsonPrice withMean(Double mean) {
        this.mean = mean;
        return this;
    }
    @JsonProperty("min")
    public Double min;
    public GetStatisticsCharging200ApplicationJsonPrice withMin(Double min) {
        this.min = min;
        return this;
    }
}