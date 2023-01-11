package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReminderProfilesList200ApplicationJson
 * Paginated Result
**/
public class ReminderProfilesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ReminderProfile[] data;
    public ReminderProfilesList200ApplicationJson withData(openapisdk.models.shared.ReminderProfile[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ReminderProfilesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ReminderProfilesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}