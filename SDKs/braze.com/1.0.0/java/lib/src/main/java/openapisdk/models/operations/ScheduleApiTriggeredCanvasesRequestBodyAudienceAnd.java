package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attribute")
    public ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute customAttribute;
    public ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd withCustomAttribute(ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute customAttribute) {
        this.customAttribute = customAttribute;
        return this;
    }
}