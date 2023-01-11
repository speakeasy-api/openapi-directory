package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleApiTriggeredCanvasesRequestBodyAudience {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AND")
    public ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd[] and;
    public ScheduleApiTriggeredCanvasesRequestBodyAudience withAnd(ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd[] and) {
        this.and = and;
        return this;
    }
}