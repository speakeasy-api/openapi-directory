package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparison")
    public String comparison;
    public ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute withComparison(String comparison) {
        this.comparison = comparison;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attribute_name")
    public String customAttributeName;
    public ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute withCustomAttributeName(String customAttributeName) {
        this.customAttributeName = customAttributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute withValue(String value) {
        this.value = value;
        return this;
    }
}