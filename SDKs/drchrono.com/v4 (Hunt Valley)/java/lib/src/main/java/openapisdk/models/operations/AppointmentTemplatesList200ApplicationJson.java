package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppointmentTemplatesList200ApplicationJson
 * Paginated Result
**/
public class AppointmentTemplatesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AppointmentTemplate[] data;
    public AppointmentTemplatesList200ApplicationJson withData(openapisdk.models.shared.AppointmentTemplate[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public AppointmentTemplatesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public AppointmentTemplatesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}