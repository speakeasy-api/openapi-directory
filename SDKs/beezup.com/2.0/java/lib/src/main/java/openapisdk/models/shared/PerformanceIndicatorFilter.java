package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PerformanceIndicatorFilter {
    @JsonProperty("operatorName")
    public String operatorName;
    public PerformanceIndicatorFilter withOperatorName(String operatorName) {
        this.operatorName = operatorName;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public PerformanceIndicatorTypeEnum performanceIndicator;
    public PerformanceIndicatorFilter withPerformanceIndicator(PerformanceIndicatorTypeEnum performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public PerformanceIndicatorFilter withValue(Double value) {
        this.value = value;
        return this;
    }
}