package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomAppointmentFieldsList200ApplicationJson
 * Paginated Result
**/
public class CustomAppointmentFieldsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomAppointmentFieldType[] data;
    public CustomAppointmentFieldsList200ApplicationJson withData(openapisdk.models.shared.CustomAppointmentFieldType[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CustomAppointmentFieldsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public CustomAppointmentFieldsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}