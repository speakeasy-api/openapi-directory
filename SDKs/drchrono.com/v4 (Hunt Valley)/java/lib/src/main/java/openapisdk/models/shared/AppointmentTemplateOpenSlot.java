package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentTemplateOpenSlot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public AppointmentTemplateOpenSlot withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public AppointmentTemplateOpenSlot withStart(String start) {
        this.start = start;
        return this;
    }
}