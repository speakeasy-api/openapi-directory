package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BasicModelStats {
    @JsonProperty("average")
    public Double average;
    public BasicModelStats withAverage(Double average) {
        this.average = average;
        return this;
    }
    @JsonProperty("median")
    public Double median;
    public BasicModelStats withMedian(Double median) {
        this.median = median;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BasicModelStats withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pVariance")
    public Double pVariance;
    public BasicModelStats withPVariance(Double pVariance) {
        this.pVariance = pVariance;
        return this;
    }
    @JsonProperty("stdDev")
    public Double stdDev;
    public BasicModelStats withStdDev(Double stdDev) {
        this.stdDev = stdDev;
        return this;
    }
}