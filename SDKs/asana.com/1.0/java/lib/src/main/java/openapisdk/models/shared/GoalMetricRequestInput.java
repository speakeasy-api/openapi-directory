package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalMetricRequestInput
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalMetricRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public GoalMetricRequestInput withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_display_value")
    public String currentDisplayValue;
    public GoalMetricRequestInput withCurrentDisplayValue(String currentDisplayValue) {
        this.currentDisplayValue = currentDisplayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_number_value")
    public Double currentNumberValue;
    public GoalMetricRequestInput withCurrentNumberValue(Double currentNumberValue) {
        this.currentNumberValue = currentNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_number_value")
    public Double initialNumberValue;
    public GoalMetricRequestInput withInitialNumberValue(Double initialNumberValue) {
        this.initialNumberValue = initialNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Long precision;
    public GoalMetricRequestInput withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_number_value")
    public Double targetNumberValue;
    public GoalMetricRequestInput withTargetNumberValue(Double targetNumberValue) {
        this.targetNumberValue = targetNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public GoalMetricRequestUnitEnum unit;
    public GoalMetricRequestInput withUnit(GoalMetricRequestUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}