package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalResponseMetric
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalResponseMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public GoalResponseMetric withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_display_value")
    public String currentDisplayValue;
    public GoalResponseMetric withCurrentDisplayValue(String currentDisplayValue) {
        this.currentDisplayValue = currentDisplayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_number_value")
    public Double currentNumberValue;
    public GoalResponseMetric withCurrentNumberValue(Double currentNumberValue) {
        this.currentNumberValue = currentNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public GoalResponseMetric withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_number_value")
    public Double initialNumberValue;
    public GoalResponseMetric withInitialNumberValue(Double initialNumberValue) {
        this.initialNumberValue = initialNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Long precision;
    public GoalResponseMetric withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public GoalResponseMetricResourceSubtypeEnum resourceSubtype;
    public GoalResponseMetric withResourceSubtype(GoalResponseMetricResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public GoalResponseMetric withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_number_value")
    public Double targetNumberValue;
    public GoalResponseMetric withTargetNumberValue(Double targetNumberValue) {
        this.targetNumberValue = targetNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public GoalResponseMetricUnitEnum unit;
    public GoalResponseMetric withUnit(GoalResponseMetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}