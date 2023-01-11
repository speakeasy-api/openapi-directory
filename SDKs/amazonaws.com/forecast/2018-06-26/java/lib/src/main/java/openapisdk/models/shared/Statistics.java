package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Statistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Avg")
    public Double avg;
    public Statistics withAvg(Double avg) {
        this.avg = avg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public Statistics withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountDistinct")
    public Long countDistinct;
    public Statistics withCountDistinct(Long countDistinct) {
        this.countDistinct = countDistinct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountDistinctLong")
    public Long countDistinctLong;
    public Statistics withCountDistinctLong(Long countDistinctLong) {
        this.countDistinctLong = countDistinctLong;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountLong")
    public Long countLong;
    public Statistics withCountLong(Long countLong) {
        this.countLong = countLong;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountNan")
    public Long countNan;
    public Statistics withCountNan(Long countNan) {
        this.countNan = countNan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountNanLong")
    public Long countNanLong;
    public Statistics withCountNanLong(Long countNanLong) {
        this.countNanLong = countNanLong;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountNull")
    public Long countNull;
    public Statistics withCountNull(Long countNull) {
        this.countNull = countNull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountNullLong")
    public Long countNullLong;
    public Statistics withCountNullLong(Long countNullLong) {
        this.countNullLong = countNullLong;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Max")
    public String max;
    public Statistics withMax(String max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Min")
    public String min;
    public Statistics withMin(String min) {
        this.min = min;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stddev")
    public Double stddev;
    public Statistics withStddev(Double stddev) {
        this.stddev = stddev;
        return this;
    }
}