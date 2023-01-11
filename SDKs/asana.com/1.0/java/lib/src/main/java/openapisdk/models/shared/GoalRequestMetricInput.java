package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalRequestMetricInput
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalRequestMetricInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public GoalRequestMetricInput withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_display_value")
    public String currentDisplayValue;
    public GoalRequestMetricInput withCurrentDisplayValue(String currentDisplayValue) {
        this.currentDisplayValue = currentDisplayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_number_value")
    public Double currentNumberValue;
    public GoalRequestMetricInput withCurrentNumberValue(Double currentNumberValue) {
        this.currentNumberValue = currentNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_number_value")
    public Double initialNumberValue;
    public GoalRequestMetricInput withInitialNumberValue(Double initialNumberValue) {
        this.initialNumberValue = initialNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Long precision;
    public GoalRequestMetricInput withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_number_value")
    public Double targetNumberValue;
    public GoalRequestMetricInput withTargetNumberValue(Double targetNumberValue) {
        this.targetNumberValue = targetNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public GoalRequestMetricUnitEnum unit;
    public GoalRequestMetricInput withUnit(GoalRequestMetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}